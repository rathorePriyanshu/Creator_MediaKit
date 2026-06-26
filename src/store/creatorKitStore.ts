"use client";

import { create } from "zustand";
import { DEFAULT_CREATOR_KIT } from "@/constants/defaults";
import { CreatorKit } from "@/types/creator-kit";

interface CreatorKitStore {
    creatorKit: CreatorKit;
    isSaving: boolean;
    lastSavedAt: Date | null;

    setCreatorKit: (creatorKit: CreatorKit) => void;
    setSavingStatus: (status: boolean) => void;
    setLastSavedAt: (date: Date | null) => void;
    resetCreatorKit: () => void;
}

export const useCreatorKitStore = create<CreatorKitStore>((set) => ({
    creatorKit: DEFAULT_CREATOR_KIT,
    isSaving: false,
    lastSavedAt: null,

    setCreatorKit: (creatorKit) => {
        const clonedKit = JSON.parse(JSON.stringify(creatorKit));
        set({ creatorKit: clonedKit });
    },
    setSavingStatus: (status) =>
        set({
            isSaving: status,
        }),
    setLastSavedAt: (date) =>
        set({
            lastSavedAt: date,
        }),
    resetCreatorKit: () =>
        set({
            creatorKit: DEFAULT_CREATOR_KIT,
        }),
}));