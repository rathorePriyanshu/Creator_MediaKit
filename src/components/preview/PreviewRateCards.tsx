"use client";

import { BadgeIndianRupee, Clock3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { RateCardInput } from "@/lib/validations";

interface PreviewRateCardsProps {
    rateCards: RateCardInput[];
}

function formatPrice(price: number) {
    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0,
    }).format(price);
}

export default function PreviewRateCards({
    rateCards,
}: PreviewRateCardsProps) {
    if (!rateCards.length) {
        return (
            <section className="py-2">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
                    Commercial Packages
                </h2>

                <div className="rounded-2xl border border-dashed border-zinc-800 py-12 text-center text-zinc-500 bg-zinc-950/20">
                    No commercial packages available yet.
                </div>
            </section>
        );
    }

    return (
        <section className="py-2">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
                Commercial Packages
            </h2>

            <div className="space-y-5">
                <AnimatePresence mode="popLayout">
                    {rateCards.map((card) => (
                        <motion.div
                            layout
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            whileHover={{ y: -3, transition: { duration: 0.2, ease: "easeOut" } }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 hover:border-zinc-700/80 hover:bg-zinc-950/60 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 border-l-4"
                            style={{ borderLeftColor: "var(--theme-color)" }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-lg font-bold text-white tracking-tight">
                                        {card.deliverable}
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                        {card.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
                                    {/* Price Badge */}
                                    <div className="rounded-xl bg-[var(--theme-color)] px-4 py-2 text-center text-white shadow-lg shadow-[var(--theme-color)]/15 border border-[var(--theme-color)]/30">
                                        <div className="flex items-center justify-center gap-1">
                                            <span className="text-xs font-semibold text-white/80">₹</span>
                                            <motion.span
                                                key={card.basePrice}
                                                initial={{ opacity: 0.5, y: -2 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="text-lg font-extrabold tracking-tight inline-block"
                                            >
                                                {formatPrice(card.basePrice)}
                                            </motion.span>
                                        </div>
                                    </div>

                                    {/* Delivery Badge */}
                                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg">
                                        <Clock3 className="h-3.5 w-3.5 text-[var(--theme-color)]" />
                                        <span>
                                            <motion.span
                                                key={card.turnaroundDays}
                                                initial={{ opacity: 0.5, y: -2 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="inline-block"
                                            >
                                                {card.turnaroundDays}{" "}
                                                {card.turnaroundDays === 1 ? "Day" : "Days"}
                                            </motion.span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}