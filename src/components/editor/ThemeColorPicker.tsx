"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Palette, Pipette } from "lucide-react";
import { CreatorKitInput } from "@/lib/validations";
import { useRef } from "react";

const PRESET_COLORS = [
    { name: "Indigo", value: "#6366F1" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Purple", value: "#A855F7" },
    { name: "Pink", value: "#EC4899" },
    { name: "Orange", value: "#F97316" },
    { name: "Green", value: "#10B981" },
    { name: "Red", value: "#EF4444" },
    { name: "Slate", value: "#64748B" },
];

export default function ThemeColorPicker() {
    const { setValue, control } = useFormContext<CreatorKitInput>();
    const themeColor = useWatch({
        control,
        name: "profile.themeColor",
    }) || "#6366F1";

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleColorChange = (newColor: string) => {
        setValue("profile.themeColor", newColor, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    return (
        <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl">
            <div className="mb-6 flex items-center gap-4 pb-5 border-b border-zinc-800/50">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] transition-all duration-300 shadow-inner">
                    <Palette className="h-5.5 w-5.5" />
                </div>
                <div>
                    <h2 className="text-xl font-bold tracking-tight text-white leading-none">
                        Theme Customization
                    </h2>
                    <p className="text-xs text-zinc-400 mt-1.5 font-medium">
                        Personalize your media kit's branding accent color.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
                {/* Preset Swatches */}
                <div className="flex flex-wrap gap-2.5">
                    {PRESET_COLORS.map((preset) => {
                        const isActive = themeColor.toLowerCase() === preset.value.toLowerCase();
                        return (
                            <button
                                key={preset.value}
                                type="button"
                                onClick={() => handleColorChange(preset.value)}
                                className={`group relative h-9 w-9 rounded-full border-2 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-md ${
                                    isActive
                                        ? "border-white scale-105 ring-2 ring-[var(--theme-color)]/50"
                                        : "border-zinc-900 hover:border-zinc-500"
                                }`}
                                style={{ backgroundColor: preset.value }}
                                title={preset.name}
                            >
                                {isActive && (
                                    <span className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="hidden sm:block h-6 w-px bg-zinc-800 mx-1" />

                {/* Custom Color Picker */}
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex h-9 items-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 text-xs font-semibold text-zinc-300 transition-all duration-200 hover:bg-zinc-850 hover:text-white hover:border-zinc-700 active:scale-[0.98]"
                    title="Custom Color"
                >
                    <div
                        className="h-4.5 w-4.5 rounded border border-zinc-800 shadow-sm"
                        style={{ backgroundColor: themeColor }}
                    />
                    <Pipette className="h-4 w-4 text-zinc-400 group-hover:text-white" />
                    <span>Custom Color</span>
                </button>
                <input
                    ref={fileInputRef}
                    type="color"
                    value={themeColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="sr-only"
                />
            </div>
        </Card>
    );
}
