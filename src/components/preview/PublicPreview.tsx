"use client";

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

            <Card className="border-zinc-800 bg-zinc-900 p-8">

                <PreviewProfile profile={creator.profile} />

            </Card>

            {/* Metrics */}

            <Card className="border-zinc-800 bg-zinc-900 p-8">

                <PreviewMetrics metrics={creator.metrics} />

            </Card>

            {/* Rate Cards */}

            <Card className="border-zinc-800 bg-zinc-900 p-8">

                <PreviewRateCards
                    rateCards={creator.rateCards}
                />

            </Card>

        </section>
    );
}