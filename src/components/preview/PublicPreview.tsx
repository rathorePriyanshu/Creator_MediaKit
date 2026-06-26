"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

import PreviewProfile from "./PreviewProfile";
import PreviewMetrics from "./PreviewMetrics";
import PreviewRateCards from "./PreviewRateCards";
import { CreatorKitInput } from "@/lib/validations";

interface PublicPreviewProps {
    creator: CreatorKitInput;
}

export default function PublicPreview({
    creator,
}: PublicPreviewProps) {
    return (
        <section 
            className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4"
            style={{ "--theme-color": creator.profile.themeColor || "#6366F1" } as React.CSSProperties}
        >
            {/* Header */}
            <div className="flex flex-col gap-1.5 pb-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                    Creator Media Kit
                </h1>
                <p className="text-sm text-zinc-400 font-medium">
                    Verified public portfolio for brands, agencies, and collaboration requests.
                </p>
            </div>

            {/* Profile */}
            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-[var(--theme-color)]/5"
            >
                <Card className="border-[#27272a]/60 bg-[#18181b]/60 relative overflow-hidden border-t-2 border-t-[var(--theme-color)] rounded-2xl shadow-xl p-0 hover:border-zinc-700/60 transition-all duration-300">
                    <PreviewProfile profile={creator.profile} />
                </Card>
            </motion.div>

            {/* Metrics */}
            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-[var(--theme-color)]/5"
            >
                <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 relative overflow-hidden rounded-2xl shadow-xl hover:border-zinc-700/60 transition-all duration-300">
                    <PreviewMetrics metrics={creator.metrics} />
                </Card>
            </motion.div>

            {/* Rate Cards */}
            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-[var(--theme-color)]/5"
            >
                <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 relative overflow-hidden rounded-2xl shadow-xl hover:border-zinc-700/60 transition-all duration-300">
                    <PreviewRateCards rateCards={creator.rateCards} />
                </Card>
            </motion.div>
        </section>
    );
}