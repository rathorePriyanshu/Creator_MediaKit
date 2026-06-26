"use client";

import { Plus } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import MetricCard from "./MetricCard";
import { CreatorKitInput } from "@/lib/validations";

export default function MetricsForm() {
    const { control } =
        useFormContext<CreatorKitInput>();

    const { fields, append, remove } =
        useFieldArray({
            control,
            name: "metrics",
        });

    return (
        <div className="space-y-5">

            <Button
                type="button"
                className="w-full"
                onClick={() =>
                    append({
                        id: crypto.randomUUID(),
                        platform: "instagram",
                        username: "",
                        followers: 0,
                        engagementRate: 0,
                    })
                }
            >
                <Plus className="mr-2 h-4 w-4" />

                Add Platform

            </Button>

            {fields.map((field, index) => (

                <MetricCard
                    key={field.id}
                    index={index}
                    remove={remove}
                />

            ))}

        </div>
    );
}