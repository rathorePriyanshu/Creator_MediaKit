"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PLATFORM_CONFIG } from "@/constants/platforms";
import { MetricInput } from "@/lib/validations";

interface PlatformSelectProps {
    value: MetricInput["platform"];
    onChange: (platform: MetricInput["platform"]) => void;
}

export default function PlatformSelect({ value, onChange }: PlatformSelectProps) {
    return (
        <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Platform
            </Label>

            <Select value={value} onValueChange={(v) => onChange(v as MetricInput["platform"])}>
                <SelectTrigger className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 rounded-xl text-white">
                    <SelectValue placeholder="Select Platform" />
                </SelectTrigger>

                <SelectContent className="border border-zinc-800 bg-zinc-950 text-white rounded-xl shadow-xl shadow-black/60 max-h-72">
                    {Object.entries(PLATFORM_CONFIG).map(([val, config]) => {
                        const Icon = config.icon;
                        return (
                            <SelectItem
                                key={val}
                                value={val}
                                className="text-zinc-300 focus:bg-zinc-900 focus:text-white rounded-lg cursor-pointer transition-colors duration-150 py-2.5 px-3 pl-8"
                            >
                                <div className="flex items-center gap-2">
                                    <Icon className="h-4 w-4 text-[var(--theme-color)]" />
                                    <span className="font-medium text-sm">{config.label}</span>
                                </div>
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
}