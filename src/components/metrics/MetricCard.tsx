"use client";

import { Trash2 } from "lucide-react";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/form/NumberInput";
import { motion } from "framer-motion";
import PlatformSelect from "./PlatformSelect";
import { CreatorKitInput } from "@/lib/validations";

interface MetricCardProps {
    index: number;
    remove: UseFieldArrayRemove;
}

export default function MetricCard({
    index,
    remove,
}: MetricCardProps) {
    const { control } =
        useFormContext<CreatorKitInput>();

    return (
        <Card className="space-y-5 border-zinc-800 bg-zinc-950 p-5">

            <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                    Platform #{index + 1}
                </h3>

                <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                >
                    <Button
                        type="button"
                        onClick={() => remove(index)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </motion.div>

            </div>

            <PlatformSelect index={index} />

            <FormField
                control={control}
                name={`metrics.${index}.username`}
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>
                            Username
                        </FormLabel>

                        <FormControl>

                            <Input
                                placeholder="creator_username"
                                {...field}
                            />

                        </FormControl>

                    </FormItem>
                )}
            />

            <div className="grid grid-cols-2 gap-4">

                <FormField
                    control={control}
                    name={`metrics.${index}.followers`}
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>
                                Followers
                            </FormLabel>

                            <FormControl>

                                <NumberInput
                                    min={0}
                                    placeholder="0"
                                    {...field}
                                />

                            </FormControl>

                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name={`metrics.${index}.engagementRate`}
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>
                                Engagement %
                            </FormLabel>

                            <FormControl>

                                <NumberInput
                                    min={0}
                                    max={100}
                                    step="0.1"
                                    placeholder="0.0"
                                    {...field}
                                />

                            </FormControl>

                        </FormItem>
                    )}
                />

            </div>

        </Card>
    );
}