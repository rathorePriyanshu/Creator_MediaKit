"use client";

import { useEffect, useRef } from "react";
import { useCreatorKitStore } from "@/store/creatorKitStore";
import { CreatorKitSchema } from "@/lib/validations";

export function useAutosave() {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const lastSavedPayload = useRef("");
    const isFirstRun = useRef(true);

    const creatorKit = useCreatorKitStore((state) => state.creatorKit);
    const setSavingStatus = useCreatorKitStore((state) => state.setSavingStatus);
    const setLastSavedAt = useCreatorKitStore((state) => state.setLastSavedAt);

    useEffect(() => {
        // Initial mount pe save mat karo
        if (isFirstRun.current) {
            isFirstRun.current = false;
            lastSavedPayload.current = JSON.stringify(creatorKit);
            return;
        }

        const payload = JSON.stringify(creatorKit);
        if (payload === lastSavedPayload.current) return;

        // Client side validate karo pehle — invalid data backend pe bhejo hi mat
        // useAutosave mein temporarily add karo
        const result = CreatorKitSchema.safeParse(creatorKit);
        if (!result.success) {
            console.log("Validation blocking save:", result.error.flatten());
            return;
        }

        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(async () => {
            try {
                setSavingStatus(true);

                const response = await fetch("/api/kit/save", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: payload,
                });

                if (!response.ok) {
                    const errorBody = await response.json();
                    console.error("Save failed:", errorBody);
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
            if (timer.current) clearTimeout(timer.current);
        };
    }, [creatorKit, setSavingStatus, setLastSavedAt]);
}