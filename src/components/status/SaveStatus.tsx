"use client";

import { CheckCircle2, Loader2 } from "lucide-react";

import { useCreatorKit } from "@/hooks/useCreatorKit";

export default function SaveStatus() {
    const {
        isSaving,
        lastSavedAt,
    } = useCreatorKit();

    if (isSaving) {
        return (
            <div className="flex items-center gap-2 text-sm text-amber-400">

                <Loader2 className="h-4 w-4 animate-spin" />

                Saving...

            </div>
        );
    }

    if (lastSavedAt) {
        return (
            <div className="flex items-center gap-2 text-sm text-green-400">

                <CheckCircle2 className="h-4 w-4" />

                Saved

            </div>
        );
    }

    return (
        <div className="text-sm text-zinc-500">
            Not Saved
        </div>
    );
}