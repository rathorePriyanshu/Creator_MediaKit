"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatorKitInput, CreatorKitSchema } from "@/lib/validations";
import { DEFAULT_CREATOR_KIT } from "@/constants/defaults";
import { useAutosave } from "@/hooks/useAutosave";

export default function CreatorKitProvider({ children }: { children: ReactNode }) {
    const methods = useForm<CreatorKitInput>({
        resolver: zodResolver(CreatorKitSchema),
        defaultValues: DEFAULT_CREATOR_KIT,
        mode: "onChange",
    });

    // metrics ab store se manage ho raha hai directly
    // form sirf profile aur rateCards ke liye hai
    useAutosave(methods.getValues(), methods.control);

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}