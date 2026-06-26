"use client";

import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import RateCardItem from "./RateCardItem";
import { CreatorKitInput } from "@/lib/validations";

export default function RateCardsForm() {
    const { control } = useFormContext<CreatorKitInput>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "rateCards",
        keyName: "fieldId",
    });

    return (
        <div className="space-y-6">
            <div className="space-y-5 flex flex-col">
                <AnimatePresence mode="popLayout">
                    {fields.map((field, index) => (
                        <motion.div
                            layout
                            key={field.fieldId}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <RateCardItem
                                index={index}
                                remove={remove}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            >
                <Button
                    type="button"
                    variant="primary"
                    className="w-full h-11 rounded-xl font-bold shadow-md shadow-[var(--theme-color)]/10 hover:shadow-lg hover:shadow-[var(--theme-color)]/15 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    onClick={() =>
                        append({
                            id: crypto.randomUUID(),
                            deliverable: "",
                            description: "",
                            basePrice: 0,
                            turnaroundDays: 1,
                        })
                    }
                >
                    <Plus className="mr-2 h-4 w-4 stroke-[2.5]" />
                    Add Package Tier
                </Button>
            </motion.div>
        </div>
    );
}