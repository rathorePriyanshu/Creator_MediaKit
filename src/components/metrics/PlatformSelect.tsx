"use client";

import { useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreatorKitInput } from "@/lib/validations";

interface PlatformSelectProps {
    index: number;
}

const platforms = [
    {
        label: "Instagram",
        value: "instagram",
    },
    {
        label: "YouTube",
        value: "youtube",
    },
    {
        label: "LinkedIn",
        value: "linkedin",
    },
    {
        label: "X",
        value: "x",
    },
];

export default function PlatformSelect({
    index,
}: PlatformSelectProps) {
    const { control } =
        useFormContext<CreatorKitInput>();

    return (
        <FormField
            control={control}
            name={`metrics.${index}.platform`}
            render={({ field }) => (
                <FormItem>

                    <FormLabel>
                        Platform
                    </FormLabel>

                    <Select
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <FormControl>

                            <SelectTrigger>

                                <SelectValue placeholder="Select Platform" />

                            </SelectTrigger>

                        </FormControl>

                        <SelectContent>

                            {platforms.map((platform) => (

                                <SelectItem
                                    key={platform.value}
                                    value={platform.value}
                                >
                                    {platform.label}
                                </SelectItem>

                            ))}

                        </SelectContent>

                    </Select>

                    <FormMessage />

                </FormItem>
            )}
        />
    );
}