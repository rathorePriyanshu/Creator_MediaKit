"use client";

import { Trash2 } from "lucide-react";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
    const { control, register } = useFormContext<CreatorKitInput>();

    return (
        <Card className="space-y-5 border-zinc-800 bg-zinc-950/30 p-5 sm:p-6 transition-all duration-300 hover:border-zinc-700/80 rounded-2xl relative shadow-lg shadow-black/5">
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-extrabold text-zinc-400">
                        {index + 1}
                    </span>
                    <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                        Platform Details
                    </h3>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                >
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => remove(index)}
                        className="h-8 w-8 p-0 rounded-lg bg-red-950/30 text-red-400 border border-red-900/40 hover:bg-red-600 hover:text-white transition-all duration-200"
                        title="Delete platform"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            <PlatformSelect index={index} />

            <input
                type="hidden"
                {...register(`metrics.${index}.id`)}
            />

            <FormField
                control={control}
                name={`metrics.${index}.username`}
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            Username
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder="creator_username"
                                className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400 font-medium" />
                    </FormItem>
                )}
            />

            <div className="grid grid-cols-2 gap-4">
                <FormField
                    control={control}
                    name={`metrics.${index}.followers`}
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Followers
                            </FormLabel>
                            <FormControl>
                                <NumberInput
                                    min={0}
                                    placeholder="0"
                                    className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs text-red-400 font-medium" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name={`metrics.${index}.engagementRate`}
                    render={({ field }) => (
                        <FormItem className="space-y-2">
                            <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Engagement %
                            </FormLabel>
                            <FormControl>
                                <NumberInput
                                    min={0}
                                    max={100}
                                    step="0.1"
                                    placeholder="0.0"
                                    className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs text-red-400 font-medium" />
                        </FormItem>
                    )}
                />
            </div>
        </Card>
    );
}