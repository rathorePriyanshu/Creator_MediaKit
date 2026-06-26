"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MetricInput } from "@/lib/validations";
import { PLATFORM_CONFIG } from "@/constants/platforms";

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

export default function PreviewMetrics({
    metrics,
}: PreviewMetricsProps) {
    if (!metrics.length) {
        return (
            <section className="py-2">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
                    Verified Metrics
                </h2>

                <div className="rounded-2xl border border-dashed border-zinc-800 py-12 text-center text-zinc-500 bg-zinc-950/20">
                    No social metrics available yet.
                </div>
            </section>
        );
    }

    return (
        <section className="py-2">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
                Verified Metrics
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
                <AnimatePresence mode="popLayout">
                    {metrics.map((metric) => {
                        const config = PLATFORM_CONFIG[metric.platform];
                        const Icon = config.icon;

                        return (
                            <motion.div
                                layout
                                key={metric.id}
                                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -12 }}
                                whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/80 hover:bg-zinc-950/60 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 flex flex-col justify-between"
                            >
                                {/* Subtle top platform gradient line */}
                                <div className={`h-[3px] bg-gradient-to-r ${config.cardGradient}`} />

                                <div className="p-5 flex flex-col gap-4 flex-1">
                                    {/* Header row */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${config.cardGradient} shadow-md`}>
                                                <Icon className="h-4.5 w-4.5 text-white" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white leading-none">
                                                    {config.label}
                                                </p>
                                                <p className="text-[11px] text-zinc-500 font-medium mt-1">
                                                    @{metric.username}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Engagement Badge */}
                                        <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[var(--theme-color)]/10 text-[var(--theme-color)] border border-[var(--theme-color)]/25">
                                            {metric.engagementRate}% ENG
                                        </span>
                                    </div>

                                    {/* Followers / Engagement divider details */}
                                    <div className="pt-3 border-t border-zinc-800/50 flex items-baseline justify-between mt-auto">
                                        <div>
                                            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                                                Audience Size
                                            </p>
                                            <p className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
                                                <motion.span
                                                    key={metric.followers}
                                                    initial={{ opacity: 0.5, y: -2 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="inline-block"
                                                >
                                                    {formatFollowers(metric.followers)}
                                                </motion.span>
                                            </p>
                                        </div>
                                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                                            Verified
                                        </span>
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