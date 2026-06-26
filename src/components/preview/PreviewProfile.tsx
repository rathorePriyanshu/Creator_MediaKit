"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CreatorProfileInput } from "@/lib/validations";

interface PreviewProfileProps {
    profile: CreatorProfileInput;
}

export default function PreviewProfile({
    profile,
}: PreviewProfileProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
        >

            {/* Avatar */}

            <div
                className="relative mb-6 aspect-square h-36 w-36 overflow-hidden rounded-full border-4"
                style={{
                    borderColor: profile.themeColor || "#6366F1",
                }}
            >
                {profile.profileImageUrl ? (
                    <Image
                        src={profile.profileImageUrl}
                        alt={profile.fullName}
                        fill
                        sizes="144px"
                        className="object-cover"
                        priority
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-4xl font-bold text-zinc-500">
                        {profile.fullName?.charAt(0).toUpperCase() || "C"}
                    </div>
                )}
            </div>

            {/* Name */}

            <motion.h1
                key={profile.fullName}
                initial={{ opacity: 0.5, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-3xl font-bold text-white"
            >
                {profile.fullName}
            </motion.h1>

            {/* Username */}

            <motion.p
                key={profile.username}
                initial={{ opacity: 0.5, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mt-2 text-lg font-medium"
                style={{
                    color: profile.themeColor || "#6366F1",
                }}
            >
                @{profile.username}
            </motion.p>

            {/* Bio */}

            {profile.bio && (
                <motion.p
                    key={profile.bio}
                    initial={{ opacity: 0.5, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-2xl whitespace-pre-line text-base leading-7 text-zinc-300"
                >
                    {profile.bio}
                </motion.p>
            )}
        </motion.section>
    );
}