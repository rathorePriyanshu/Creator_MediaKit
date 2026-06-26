"use client";

import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCreatorKit } from "@/hooks/useCreatorKit";

export default function PreviewPanel() {
  const { creatorKit, isSaving, lastSavedAt } = useCreatorKit();
  const { profile, metrics, rateCards } = creatorKit;

  function formatFollowers(value: number | null | undefined) {
    const safeVal = Math.max(0, value ?? 0);

    if (safeVal >= 1_000_000) {
      const val = safeVal / 1_000_000;
      const formatted = Math.floor(val * 10) / 10;
      return formatted % 1 === 0 ? `${formatted.toFixed(0)}M` : `${formatted.toFixed(1)}M`;
    }

    if (safeVal >= 1000) {
      const val = safeVal / 1000;
      const formatted = Math.floor(val * 10) / 10;
      return formatted % 1 === 0 ? `${formatted.toFixed(0)}K` : `${formatted.toFixed(1)}K`;
    }

    return safeVal.toString();
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">


      <div className="flex items-center justify-between">

        <Badge
          className="border-indigo-500 text-indigo-400"
        >
          Live Preview
        </Badge>

        <span className="text-xs text-zinc-500">
          {isSaving
            ? "Saving..."
            : lastSavedAt
              ? `Saved ${lastSavedAt.toLocaleTimeString()}`
              : "Not Saved"}
        </span>

      </div>


      <Card className="border-zinc-800 bg-zinc-900 p-8">

        <div className="flex flex-col items-center">

          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-zinc-700">

            {profile.profileImageUrl ? (
              <Image
                src={profile.profileImageUrl}
                alt={profile.fullName}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-zinc-500">
                No Image
              </div>
            )}

          </div>

          <h2 className="mt-5 text-2xl font-bold">
            {profile.fullName || "Creator Name"}
          </h2>

          <p className="mt-1 text-sm text-indigo-400">
            @{profile.username || "creator"}
          </p>

          <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
            {profile.bio ||
              "Tell brands who you are..."}
          </p>

        </div>

      </Card>

      {/* Metrics */}

      <Card className="border-zinc-800 bg-zinc-900 p-6">
        <h3 className="mb-4 text-lg font-semibold">
          Verified Metrics
        </h3>

        {metrics.length === 0 ? (
          <div className="rounded-lg border border-dashed border-zinc-700 p-8 text-center">
            <p className="text-sm text-zinc-500">
              Add your first platform from the editor.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="rounded-xl border border-zinc-700 bg-zinc-800 p-5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold capitalize">
                    {metric.platform}
                  </h4>

                  <span className="rounded-full bg-indigo-600/20 px-2 py-1 text-xs text-indigo-400">
                    {Math.min(100, Math.max(0, metric.engagementRate ?? 0))}%
                  </span>
                </div>

                <p className="mt-4 text-2xl font-bold">
                  {formatFollowers(metric.followers)}
                </p>

                <p className="text-sm text-zinc-500">
                  Followers
                </p>

                <p className="mt-3 text-xs text-zinc-400">
                  @{metric.username}
                </p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Rate Cards */}

      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-5 text-lg font-semibold">
          Commercial Packages
        </h3>

        {rateCards.length === 0 ? (
          <div className="rounded-lg border border-dashed border-zinc-700 p-8 text-center">
            <p className="text-sm text-zinc-500">
              Add your first package from the editor.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {rateCards.map((card) => (

              <div
                key={card.id}
                className="rounded-xl border border-zinc-700 bg-zinc-800 p-5"
              >

                <div className="flex items-center justify-between">

                  <h4 className="font-semibold">
                    {card.deliverable}
                  </h4>

                  <div className="rounded-lg bg-indigo-600 px-4 py-2 font-bold text-white">
                    ₹{Math.max(0, card.basePrice ?? 0).toLocaleString("en-IN")}
                  </div>

                </div>

                <p className="mt-4 text-sm text-zinc-400">
                  {card.description}
                </p>

                <p className="mt-4 text-xs text-zinc-500">
                  Delivery: {Math.max(1, card.turnaroundDays ?? 1)} Day
                  {Math.max(1, card.turnaroundDays ?? 1) > 1 ? "s" : ""}
                </p>

              </div>

            ))}

          </div>
        )}

      </Card>

    </div>
  );
}