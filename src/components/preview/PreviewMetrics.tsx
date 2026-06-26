"use client";

import { Instagram, Youtube, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { MetricInput } from "@/lib/validations";

interface PreviewMetricsProps {
    metrics: MetricInput[];
}

function formatFollowers(value: number) {
    if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(1)}M`;
    }

    if (value >= 1_000) {
        return `${(value / 1_000).toFixed(1)}K`;
    }

    return value.toString();
}

const platformConfig = {
    instagram: {
        label: "Instagram",
        icon: Instagram,
        accent: "from-pink-500 via-fuchsia-500 to-orange-400",
        badge: "bg-pink-500/15 text-pink-400",
    },

    youtube: {
        label: "YouTube",
        icon: Youtube,
        accent: "from-red-600 to-red-500",
        badge: "bg-red-500/15 text-red-400",
    },

    linkedin: {
        label: "LinkedIn",
        icon: Linkedin,
        accent: "from-sky-600 to-blue-500",
        badge: "bg-sky-500/15 text-sky-400",
    },

    x: {
        label: "X",
        icon: SiX,
        accent: "from-zinc-400 to-white",
        badge: "bg-zinc-700 text-zinc-200",
    },
};

export default function PreviewMetrics({
    metrics,
}: PreviewMetricsProps) {
    console.log(metrics);
    if (!metrics.length) {
        return (
            <section>

                <h2 className="mb-6 text-2xl font-bold">
                    Verified Metrics
                </h2>

                <div className="rounded-xl border border-dashed border-zinc-700 py-12 text-center text-zinc-500">

                    No social metrics available.

                </div>

            </section>
        );
    }

    return (
        <section>

            <h2 className="mb-6 text-2xl font-bold">
                Verified Metrics
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {metrics.map((metric) => {
                        const config =
                            platformConfig[metric.platform];

                        const Icon = config.icon;

                        return (
                            <motion.div
                                layout
                                key={metric.id}
                                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -12 }}
                                whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10"
                            >

                                {/* Top */}

                                <div
                                    className={`bg-gradient-to-r ${config.accent} p-[1px]`}
                                >
                                    <div className="flex items-center justify-between bg-zinc-950 px-5 py-4">

                                        <div className="flex items-center gap-3">

                                            <Icon className="h-5 w-5" />

                                            <div>

                                                <p className="font-semibold">
                                                    {config.label}
                                                </p>

                                                <p className="text-sm text-zinc-500">
                                                    @{metric.username}
                                                </p>

                                            </div>

                                        </div>

                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-semibold ${config.badge}`}
                                        >
                                            Verified
                                        </span>

                                    </div>
                                </div>

                                {/* Body */}

                                <div className="grid grid-cols-2 divide-x divide-zinc-800">

                                    <div className="p-5">

                                        <p className="text-sm text-zinc-500">
                                            Followers
                                        </p>

                                        <p className="mt-2 text-2xl font-bold">
                                            <motion.span
                                                key={metric.followers}
                                                initial={{ opacity: 0.5, y: -2 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="inline-block"
                                            >
                                                {formatFollowers(
                                                    metric.followers
                                                )}
                                            </motion.span>
                                        </p>

                                    </div>

                                    <div className="p-5">

                                        <p className="text-sm text-zinc-500">
                                            Engagement
                                        </p>

                                        <p className="mt-2 text-2xl font-bold">
                                            <motion.span
                                                key={metric.engagementRate}
                                                initial={{ opacity: 0.5, y: -2 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="inline-block"
                                            >
                                                {metric.engagementRate}%
                                            </motion.span>
                                        </p>

                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

        </section>
    );
}