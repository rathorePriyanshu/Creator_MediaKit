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
            <section>

                <h2 className="mb-6 text-2xl font-bold">
                    Commercial Packages
                </h2>

                <div className="rounded-xl border border-dashed border-zinc-700 py-12 text-center text-zinc-500">

                    No commercial packages available.

                </div>

            </section>
        );
    }

    return (
        <section>

            <h2 className="mb-6 text-2xl font-bold">
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
                            whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="
              rounded-xl
              border
              border-zinc-800
              bg-zinc-950
              transition-all
              duration-300
              hover:border-indigo-500/50
              hover:shadow-lg
              hover:shadow-indigo-500/10
            "
                        >

                            {/* Header */}

                            <div className="flex items-center justify-between border-b border-zinc-800 p-5">

                                <div>

                                    <h3 className="text-lg font-semibold text-white">
                                        {card.deliverable}
                                    </h3>

                                    <p className="mt-2 text-sm text-zinc-400">
                                        {card.description}
                                    </p>

                                </div>

                                <div className="rounded-xl bg-indigo-600 px-5 py-3 text-center text-white">

                                    <div className="flex items-center justify-center gap-1">

                                        <BadgeIndianRupee className="h-4 w-4" />

                                        <motion.span
                                            key={card.basePrice}
                                            initial={{ opacity: 0.5, y: -2 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="text-xl font-bold inline-block"
                                        >
                                            {formatPrice(card.basePrice)}
                                        </motion.span>

                                    </div>

                                </div>

                            </div>

                            {/* Footer */}

                            <div className="flex items-center justify-between px-5 py-4 text-sm text-zinc-400">

                                <div className="flex items-center gap-2">

                                    <Clock3 className="h-4 w-4" />

                                    Delivery

                                </div>

                                <span className="font-medium">
                                    <motion.span
                                        key={card.turnaroundDays}
                                        initial={{ opacity: 0.5, y: -2 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="inline-block"
                                    >
                                        {card.turnaroundDays}{" "}
                                        {card.turnaroundDays === 1
                                            ? "Day"
                                            : "Days"}
                                    </motion.span>
                                </span>

                            </div>

                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </section>
    );
}