"use client";

import { useEffect, useRef } from "react";
import { Control, useFormState } from "react-hook-form";
import { CreatorKitInput } from "@/lib/validations";
import { useCreatorKitStore } from "@/store/creatorKitStore";

export function useAutosave(
    data: CreatorKitInput,
    control: Control<CreatorKitInput>
) {
    const timer = useRef<NodeJS.Timeout | null>(null);

    // Stores the last successfully saved payload
    const lastSavedPayload = useRef("");

    const { isDirty, isValid } = useFormState({
        control,
    });

    const {
        setSavingStatus,
        setLastSavedAt,
    } = useCreatorKitStore();

    useEffect(() => {
        if (!data) return;

        if (!isDirty || !isValid) return;

        const payload = JSON.stringify(data);
        if (payload === lastSavedPayload.current) {
            return;
        }

        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(async () => {
            try {
                setSavingStatus(true);

                const response = await fetch("/api/kit/save", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: payload,
                });

                if (!response.ok) {
                    throw new Error("Autosave failed");
                }

                const savedKit = await response.json();
                lastSavedPayload.current = payload;

                setLastSavedAt(new Date(savedKit.updatedAt));
            } catch (err) {
                console.error(err);
            } finally {
                setSavingStatus(false);
            }
        }, 800);

        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, [
        data,
        isDirty,
        isValid,
        setSavingStatus,
        setLastSavedAt,
    ]);
}