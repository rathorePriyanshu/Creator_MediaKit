"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CreatorKitInput } from "@/lib/validations";

export default function ProfileImageUpload() {
    const inputRef = useRef<HTMLInputElement>(null);
    const { control, setError, clearErrors } = useFormContext<CreatorKitInput>();

    return (
        <FormField
            control={control}
            name="profile.profileImageUrl"
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        Profile Photo
                    </FormLabel>

                    <FormControl>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                            <div
                                onClick={() => inputRef.current?.click()}
                                className="relative aspect-square w-40 cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-zinc-800 bg-zinc-950/40 transition-all duration-300 hover:border-[var(--theme-color)] hover:bg-zinc-950/70 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 group"
                            >
                                {field.value ? (
                                    <>
                                        <Image
                                            src={field.value}
                                            alt="Profile"
                                            fill
                                            className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 gap-1.5 text-white">
                                            <Camera className="h-6 w-6 transform translate-y-1 transition-transform duration-300 group-hover:translate-y-0" />
                                            <span className="text-[10px] font-bold tracking-wider uppercase">Change Photo</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex h-full flex-col items-center justify-center gap-2.5 text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300 p-4 text-center">
                                        <div className="p-3 rounded-full bg-zinc-900/60 border border-zinc-800 group-hover:bg-zinc-900 group-hover:border-zinc-700 transition-colors duration-300">
                                            <Camera className="h-6 w-6 text-zinc-400 group-hover:text-[var(--theme-color)] transition-colors duration-300" />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <p className="text-xs font-semibold">Upload Photo</p>
                                            <p className="text-[10px] text-zinc-600 mt-0.5">JPG, PNG up to 2MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <input
                                ref={inputRef}
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    if (!file) return;

                                    if (!file.type.startsWith("image/")) {
                                        setError("profile.profileImageUrl", {
                                            type: "manual",
                                            message: "Only image files are allowed",
                                        });
                                        return;
                                    }

                                    const maxSizeBytes = 2 * 1024 * 1024;
                                    if (file.size > maxSizeBytes) {
                                        setError("profile.profileImageUrl", {
                                            type: "manual",
                                            message: "Image size must be less than 2 MB",
                                        });
                                        return;
                                    }
                                    clearErrors("profile.profileImageUrl");

                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64String = reader.result as string;
                                        field.onChange(base64String);
                                    };
                                    reader.readAsDataURL(file);
                                }}
                            />

                            <div className="flex flex-col gap-2">
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() => inputRef.current?.click()}
                                    className="text-xs font-semibold h-10 px-4 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 transition-all duration-200 active:scale-[0.98]"
                                >
                                    Choose Image
                                </Button>
                                <p className="text-[11px] text-zinc-500 font-medium">
                                    Supports PNG, JPEG or GIF formats. Maximum file size 2MB.
                                </p>
                            </div>
                        </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-400 font-medium" />
                </FormItem>
            )}
        />
    );
}