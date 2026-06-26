"use client";

import { ReactNode, useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatorKitInput, CreatorKitSchema, } from "@/lib/validations";

import { DEFAULT_CREATOR_KIT } from "@/constants/defaults";
import { useCreatorKitStore } from "@/store/creatorKitStore";
import { useAutosave } from "@/hooks/useAutosave";

interface CreatorKitProviderProps {
    children: ReactNode;
}

export default function CreatorKitProvider({
    children,
}: CreatorKitProviderProps) {

    const methods = useForm<CreatorKitInput>({
        resolver: zodResolver(CreatorKitSchema),
        defaultValues: DEFAULT_CREATOR_KIT,
        mode: "onChange",
    });

    const values = useWatch({
        control: methods.control,
    });

    const setCreatorKit =
        useCreatorKitStore(
            state => state.setCreatorKit
        );

    useEffect(() => {
        setCreatorKit(values as CreatorKitInput);
    }, [values, setCreatorKit]);

    useAutosave(values as CreatorKitInput, methods.control);

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}