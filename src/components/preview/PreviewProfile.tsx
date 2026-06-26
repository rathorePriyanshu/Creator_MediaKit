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
            className="w-full relative overflow-hidden flex flex-col items-center text-center"
        >
            {/* Top Banner Accent */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-[var(--theme-color)]/20 via-[var(--theme-color)]/5 to-transparent border-b border-zinc-800/40" />

            <div className="flex flex-col items-center pt-16 pb-8 px-6 relative z-10 w-full">
                {/* Avatar */}
                <div
                    className="relative mb-5 aspect-square h-32 w-32 overflow-hidden rounded-full border-4 shadow-xl shadow-black/30"
                    style={{
                        borderColor: profile.themeColor || "#6366F1",
                    }}
                >
                    {profile.profileImageUrl ? (
                        <Image
                            src={profile.profileImageUrl}
                            alt={profile.fullName || "Profile"}
                            fill
                            sizes="128px"
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-4xl font-extrabold text-zinc-500">
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
                    className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent"
                >
                    {profile.fullName || "Creator Name"}
                </motion.h1>

                {/* Username */}
                <motion.p
                    key={profile.username}
                    initial={{ opacity: 0.5, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="mt-1.5 text-sm font-bold tracking-wider uppercase"
                    style={{
                        color: profile.themeColor || "#6366F1",
                    }}
                >
                    @{profile.username || "creator"}
                </motion.p>

                {/* Bio */}
                {profile.bio && (
                    <motion.p
                        key={profile.bio}
                        initial={{ opacity: 0.5, y: -2 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mt-5 max-w-xl whitespace-pre-line text-sm leading-relaxed text-zinc-400 font-medium"
                    >
                        {profile.bio}
                    </motion.p>
                )}
            </div>
        </motion.section>
    );
}