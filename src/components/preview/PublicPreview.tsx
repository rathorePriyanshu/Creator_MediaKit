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
    console.log("creator", creator);

    return (
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-6">

            {/* Header */}

            <div className="space-y-2">

                <h1 className="text-3xl font-bold text-white">
                    Creator Media Kit
                </h1>

                <p className="text-zinc-400">
                    Public portfolio for brands and agencies.
                </p>

            </div>

            {/* Profile */}

            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
                <Card className="border-zinc-800 bg-zinc-900 p-8">

                    <PreviewProfile profile={creator.profile} />

                </Card>
            </motion.div>

            {/* Metrics */}

            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
                <Card className="border-zinc-800 bg-zinc-900 p-8">

                    <PreviewMetrics metrics={creator.metrics} />

                </Card>
            </motion.div>

            {/* Rate Cards */}

            <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/5"
            >
                <Card className="border-zinc-800 bg-zinc-900 p-8">

                    <PreviewRateCards
                        rateCards={creator.rateCards}
                    />

                </Card>
            </motion.div>

        </section>
    );
}