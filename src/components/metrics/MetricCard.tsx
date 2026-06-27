"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/form/NumberInput";
import { motion } from "framer-motion";
import { MetricInput, PlatformSchema } from "@/lib/validations";
import { PLATFORM_CONFIG } from "@/constants/platforms";
import { Label } from "@/components/ui/label";
import PlatformSelect from "./PlatformSelect";

interface MetricCardProps {
    index: number;
    metric: MetricInput;
    onRemove: () => void;
    onChange: (updated: MetricInput) => void;
}

export default function MetricCard({ index, metric, onRemove, onChange }: MetricCardProps) {
    const platforms = PlatformSchema.options;

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
                        onClick={onRemove}
                        className="h-8 w-8 p-0 rounded-lg bg-red-950/30 text-red-400 border border-red-900/40 hover:bg-red-600 hover:text-white transition-all duration-200"
                        title="Delete platform"
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </motion.div>
            </div>

            {/* Platform Select */}
            <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Platform
                </Label>
                <PlatformSelect
                    value={metric.platform}
                    onChange={(platform) => onChange({ ...metric, platform })}
                />
            </div>
            {/* <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Platform
                </Label>
                <select
                    value={metric.platform}
                    onChange={(e) =>
                        onChange({ ...metric, platform: e.target.value as MetricInput["platform"] })
                    }
                    className="w-full h-11 rounded-xl border border-zinc-800/80 bg-zinc-950/60 px-4 text-sm font-medium text-white hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:outline-none transition-all duration-200"
                >
                    {platforms.map((p) => (
                        <option key={p} value={p} className="bg-zinc-900">
                            {PLATFORM_CONFIG[p]?.label ?? p}
                        </option>
                    ))}
                </select>
            </div> */}

            {/* Username */}
            <div className="space-y-2">
                <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Username
                </Label>
                <Input
                    value={metric.username}
                    onChange={(e) => onChange({ ...metric, username: e.target.value })}
                    placeholder="creator_username"
                    className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Followers */}
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Followers
                    </Label>
                    <NumberInput
                        value={metric.followers}
                        onChange={(v) =>
                            onChange({ ...metric, followers: v || 0 })
                        }
                        min={0}
                        placeholder="0"
                        className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                    />
                </div>

                {/* Engagement Rate */}
                <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Engagement %
                    </Label>
                    <NumberInput
                        value={metric.engagementRate}
                        onChange={(v) =>
                            onChange({ ...metric, engagementRate: v || 0 })
                        }
                        min={0}
                        max={100}
                        step="0.1"
                        placeholder="0.0"
                        className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                    />
                </div>
            </div>
        </Card>
    );
}