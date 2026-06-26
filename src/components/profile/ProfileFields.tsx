"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CreatorKitInput } from "@/lib/validations";

export default function ProfileFields() {
    const { control } =
        useFormContext<CreatorKitInput>();

    return (
        <div className="space-y-5">

            {/* Display Name */}

            <FormField
                control={control}
                name="profile.fullName"
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>
                            Display Name
                        </FormLabel>

                        <FormControl>

                            <Input
                                placeholder="John Doe"
                                {...field}
                            />

                        </FormControl>

                        <FormMessage />

                    </FormItem>
                )}
            />

            {/* Username */}

            <FormField
                control={control}
                name="profile.username"
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>
                            Username
                        </FormLabel>

                        <FormControl>

                            <Input
                                placeholder="johndoe"
                                {...field}
                            />

                        </FormControl>

                        <p className="text-xs text-zinc-500">

                            Don't include @

                        </p>

                        <FormMessage />

                    </FormItem>
                )}
            />

            {/* Bio */}

            <FormField
                control={control}
                name="profile.bio"
                render={({ field }) => (
                    <FormItem>

                        <FormLabel>

                            Biography

                        </FormLabel>

                        <FormControl>

                            <Textarea
                                rows={5}
                                placeholder="Tell brands about yourself..."
                                {...field}
                            />

                        </FormControl>

                        <FormMessage />

                    </FormItem>
                )}
            />

        </div>
    );
}