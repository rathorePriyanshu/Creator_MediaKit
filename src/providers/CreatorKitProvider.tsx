"use client";

import { ReactNode, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatorKitInput, CreatorKitSchema } from "@/lib/validations";
import { DEFAULT_CREATOR_KIT } from "@/constants/defaults";
import { useAutosave } from "@/hooks/useAutosave";
import { useCreatorKitStore } from "@/store/creatorKitStore";

export default function CreatorKitProvider({ children }: { children: ReactNode }) {
    const setCreatorKit = useCreatorKitStore((state) => state.setCreatorKit);
    const creatorKit = useCreatorKitStore((state) => state.creatorKit);

    const methods = useForm<CreatorKitInput>({
        resolver: zodResolver(CreatorKitSchema),
        defaultValues: DEFAULT_CREATOR_KIT,
        mode: "onChange",
    });

    useEffect(() => {
        // Profile fields (jo RHF manage karta hai) → store mein sync karo
        const subscription = methods.watch((formValues) => {
            setCreatorKit({
                // Store se metrics aur rateCards lo (wo store mein hain)
                ...creatorKit,
                // Form se sirf profile lo
                profile: formValues.profile as CreatorKitInput["profile"],
            });
        });
        return () => subscription.unsubscribe();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [methods, setCreatorKit]);

    useAutosave();

    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    );
}