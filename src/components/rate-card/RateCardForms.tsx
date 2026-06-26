"use client";

import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
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

            {fields.map((field, index) => (

                <RateCardItem
                    key={field.id}
                    index={index}
                    remove={remove}
                />

            ))}

        </div>
    );
}