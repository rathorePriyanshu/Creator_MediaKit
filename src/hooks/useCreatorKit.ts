"use client";

import { useCreatorKitStore } from "@/store/creatorKitStore";

export const useCreatorKit = () => {
    const creatorKit = useCreatorKitStore(
        (state) => state.creatorKit
    );

    const setCreatorKit = useCreatorKitStore(
        (state) => state.setCreatorKit
    );

    const isSaving = useCreatorKitStore(
        (state) => state.isSaving
    );

    const setSavingStatus = useCreatorKitStore(
        (state) => state.setSavingStatus
    );

    const lastSavedAt = useCreatorKitStore(
        (state) => state.lastSavedAt
    );

    const setLastSavedAt = useCreatorKitStore(
        (state) => state.setLastSavedAt
    );

    const resetCreatorKit = useCreatorKitStore(
        (state) => state.resetCreatorKit
    );

    return {
        creatorKit,
        setCreatorKit,
        isSaving,
        setSavingStatus,
        lastSavedAt,
        setLastSavedAt,
        resetCreatorKit,
    };
};