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
                <FormItem>

                    <FormLabel>Profile Photo</FormLabel>

                    <FormControl>

                        <div className="space-y-4">

                            <div
                                onClick={() => inputRef.current?.click()}
                                className="relative aspect-square w-36 cursor-pointer overflow-hidden rounded-xl border-2 border-dashed border-zinc-700 bg-zinc-900 transition hover:border-indigo-500">
                                {field.value ? (
                                    <Image
                                        src={field.value}
                                        alt="Profile"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500">
                                        <Camera className="h-8 w-8" />
                                        <p className="text-xs">
                                            Upload Photo
                                        </p>

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

                                    // Validate selected file type is an image
                                    if (!file.type.startsWith("image/")) {
                                        setError("profile.profileImageUrl", {
                                            type: "manual",
                                            message: "Only image files are allowed",
                                        });
                                        return;
                                    }

                                    // Limit upload size to 2 MB (2,097,152 bytes)
                                    const maxSizeBytes = 2 * 1024 * 1024;
                                    if (file.size > maxSizeBytes) {
                                        setError("profile.profileImageUrl", {
                                            type: "manual",
                                            message: "Image size must be less than 2 MB",
                                        });
                                        return;
                                    }

                                    // Clear validation errors if validations pass
                                    clearErrors("profile.profileImageUrl");

                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        const base64String = reader.result as string;
                                        field.onChange(base64String);
                                    };
                                    reader.readAsDataURL(file);
                                }}
                            />

                            <Button
                                type="button"
                                onClick={() => inputRef.current?.click()}
                            >
                                Choose Image
                            </Button>

                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}