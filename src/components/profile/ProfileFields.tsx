"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreatorKitInput } from "@/lib/validations";

export default function ProfileFields() {
    const { control } = useFormContext<CreatorKitInput>();

    return (
        <div className="space-y-6">
            {/* Display Name */}
            <FormField
                control={control}
                name="profile.fullName"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            Display Name
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder="John Doe"
                                className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400 font-medium" />
                    </FormItem>
                )}
            />

            {/* Username */}
            <FormField
                control={control}
                name="profile.username"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            Username
                        </FormLabel>
                        <FormControl>
                            <Input
                                placeholder="johndoe"
                                className="h-11 border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl"
                                {...field}
                            />
                        </FormControl>
                        <p className="text-[11px] font-medium text-zinc-500/80">
                            Do not include the @ symbol.
                        </p>
                        <FormMessage className="text-xs text-red-400 font-medium" />
                    </FormItem>
                )}
            />

            {/* Bio */}
            <FormField
                control={control}
                name="profile.bio"
                render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                            Biography
                        </FormLabel>
                        <FormControl>
                            <Textarea
                                rows={5}
                                placeholder="Write a short summary about your audience and content style..."
                                className="border border-zinc-800/80 bg-zinc-950/60 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:ring-[var(--theme-color)]/20 focus:bg-zinc-950 px-4 py-3 text-sm font-medium transition-all duration-200 placeholder:text-zinc-600 rounded-xl resize-none"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400 font-medium" />
                    </FormItem>
                )}
            />
        </div>
    );
}