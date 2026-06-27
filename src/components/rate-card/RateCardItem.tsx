"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NumberInput } from "@/components/form/NumberInput";
import { motion } from "framer-motion";
import { RateCardInput } from "@/lib/validations";

interface Props {
    index: number;
    rateCard: RateCardInput;
    onRemove: () => void;
    onChange: (updated: RateCardInput) => void;
}

export default function RateCardItem({ index, rateCard, onRemove, onChange }: Props) {
    return (
        <Card className="space-y-5 border-zinc-800 bg-zinc-950/30 p-5 sm:p-6 transition-all duration-300 hover:border-zinc-700/80 rounded-2xl relative shadow-lg shadow-black/5">
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-[10px] font-extrabold text-zinc-400">
                        {index + 1}
                    </span>
                    <h3 className="text-xs font-bold text-white tracking-wider uppercase">
                        Package Tier
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
                        onClick={onRemove}
                        className="h-8 w-8 p-0 rounded-lg bg-red-950/30 text-red-400 border border-red-900/40 hover:bg-red-600 hover:text-white transition-all duration-200"
                        title="Delete package"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            {/* Deliverable */}
            <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Deliverable Name
                </Label>
                <Input
                    value={rateCard.deliverable}
                    onChange={(e) => onChange({ ...rateCard, deliverable: e.target.value })}
                    placeholder="Dedicated YouTube Video, Instagram Reel..."
                    className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Description
                </Label>
                <Textarea
                    value={rateCard.description}
                    onChange={(e) => onChange({ ...rateCard, description: e.target.value })}
                    rows={3}
                    placeholder="Specify what's included in this package (e.g. 60s integration, link in bio)..."
                    className="border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 py-3 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl resize-none"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Base Price */}
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Base Price
                    </Label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-zinc-500 select-none">
                            ₹
                        </span>
                        <NumberInput
                            value={rateCard.basePrice}
                            onChange={(v) => onChange({ ...rateCard, basePrice: v || 0 })}
                            min={0}
                            placeholder="0"
                            className="pl-8 h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 pr-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                        />
                    </div>
                </div>

                {/* Turnaround Days */}
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Delivery Time
                    </Label>
                    <div className="relative">
                        <NumberInput
                            value={rateCard.turnaroundDays}
                            onChange={(v) => onChange({ ...rateCard, turnaroundDays: v || 1 })}
                            min={1}
                            step={1}
                            placeholder="1"
                            className="pr-14 h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 pl-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider select-none pointer-events-none">
                            Days
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
}