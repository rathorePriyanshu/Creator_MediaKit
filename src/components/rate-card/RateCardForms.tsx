"use client";

import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import RateCardItem from "./RateCardItem";
import { CreatorKitInput } from "@/lib/validations";

export default function RateCardsForm() {
    const { control } =
        useFormContext<CreatorKitInput>();

    const { fields, append, remove } =
        useFieldArray({
            control,
            name: "rateCards",
        });

    return (
        <div className="space-y-5">

            <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            >
                <Button
                    type="button"
                    className="w-full"
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
                    <Plus className="mr-2 h-4 w-4" />

                    Add Package

                </Button>
            </motion.div>

            <div className="space-y-5 flex flex-col">
                <AnimatePresence mode="popLayout">
                    {fields.map((field, index) => (
                        <motion.div
                            layout
                            key={field.id}
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

        </div>
    );
}