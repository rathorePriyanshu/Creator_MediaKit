"use client";

import { Trash2 } from "lucide-react";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { NumberInput } from "@/components/form/NumberInput";
import { motion } from "framer-motion";
import { CreatorKitInput } from "@/lib/validations";

interface Props {
    index: number;
    remove: UseFieldArrayRemove;
}

export default function RateCardItem({
    index,
    remove,
}: Props) {
    const { control } =
        useFormContext<CreatorKitInput>();

    return (
        <Card className="space-y-5 border-zinc-800 bg-zinc-950 p-5">

            <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                    Package #{index + 1}
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

            <FormField
                control={control}
                name={`rateCards.${index}.deliverable`}
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>
                            Deliverable
                        </FormLabel>

                        <FormControl>

                            <Input
                                placeholder="Dedicated Instagram Reel"
                                {...field}
                            />

                        </FormControl>

                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name={`rateCards.${index}.description`}
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>
                            Description
                        </FormLabel>

                        <FormControl>

                            <Textarea
                                rows={4}
                                placeholder="Campaign scope..."
                                {...field}
                            />

                        </FormControl>

                    </FormItem>
                )}
            />

            <div className="grid grid-cols-2 gap-4">

                <FormField
                    control={control}
                    name={`rateCards.${index}.basePrice`}
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>
                                Base Price
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
                    name={`rateCards.${index}.turnaroundDays`}
                    render={({ field }) => (
                        <FormItem>

                            <FormLabel>
                                Turnaround (Days)
                            </FormLabel>

                            <FormControl>

                                <NumberInput
                                    min={1}
                                    step={1}
                                    placeholder="1"
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