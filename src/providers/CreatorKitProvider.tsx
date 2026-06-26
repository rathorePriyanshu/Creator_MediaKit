"use client";

import { ReactNode, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DEFAULT_CREATOR_KIT } from "@/constants/defaults";
import { CreatorKitInput, CreatorKitSchema } from "@/lib/validations";
import { useCreatorKitStore } from "@/store/creatorKitStore";

interface CreatorKitProviderProps {
    children: ReactNode;
}

export default function CreatorKitProvider({
    children,
}: CreatorKitProviderProps) {
    const setCreatorKit = useCreatorKitStore(
        (state) => state.setCreatorKit
    );

    const methods = useForm<CreatorKitInput>({
        resolver: zodResolver(CreatorKitSchema),
        defaultValues: DEFAULT_CREATOR_KIT,
        mode: "onChange",
    });

    useEffect(() => {
        const subscription = methods.watch((values) => {
            setCreatorKit(values as CreatorKitInput);
        });

        return () => subscription.unsubscribe();
    }, [methods, setCreatorKit]);

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}