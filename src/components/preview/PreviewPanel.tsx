"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCreatorKit } from "@/hooks/useCreatorKit";
import SaveStatus from "../status/SaveStatus";
import { PLATFORM_CONFIG } from "@/constants/platforms";
import { Clock3 } from "lucide-react";

export default function PreviewPanel() {
  const { creatorKit } = useCreatorKit();
  const { profile, metrics, rateCards } = creatorKit;

  console.log("debug metrics ====", metrics)

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
    <div
      className="mx-auto max-w-xl space-y-6"
      style={{ "--theme-color": profile.themeColor || "#6366F1" } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <Badge
          className="border-[var(--theme-color)] text-[var(--theme-color)] bg-[var(--theme-color)]/10 font-semibold"
        >
          Live Preview
        </Badge>

        <SaveStatus />
      </div>

      <Card className="border-[#27272a]/60 bg-[#18181b]/60 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 border-t-2 border-t-[var(--theme-color)] rounded-2xl p-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-[var(--theme-color)]/20 via-[var(--theme-color)]/5 to-transparent border-b border-zinc-800/40" />

        <div className="flex flex-col items-center pt-16 pb-8 px-6 relative z-10 w-full text-center">
          <div className="relative mb-5 aspect-square h-28 w-28 overflow-hidden rounded-full border-4 shadow-xl shadow-black/30"
            style={{ borderColor: "var(--theme-color)" }}>
            {profile.profileImageUrl ? (
              <Image
                src={profile.profileImageUrl}
                alt={profile.fullName || "Profile"}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-3xl font-extrabold text-zinc-500">
                {profile.fullName?.charAt(0).toUpperCase() || "C"}
              </div>
            )}
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-white bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
            {profile.fullName || "Creator Name"}
          </h2>

          <p className="mt-1.5 text-sm font-bold tracking-wider uppercase text-[var(--theme-color)]">
            @{profile.username || "creator"}
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-400 font-medium">
            {profile.bio || "Tell brands who you are..."}
          </p>
        </div>
      </Card>

      {/* Metrics */}
      <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-zinc-700/60 transition-all duration-300">
        <h3 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
          Verified Metrics
        </h3>

        {(metrics || []).length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 py-12 text-center text-zinc-500 bg-zinc-950/20">
            Add your first platform from the editor.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2">
            {metrics.map((metric) => {
              const config = PLATFORM_CONFIG[metric.platform];
              const Icon = config ? config.icon : null;

              return (
                <div
                  key={metric.id}
                  className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/80 hover:bg-zinc-950/60 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 flex flex-col justify-between"
                >
                  {/* Subtle top platform gradient line */}
                  {config && (
                    <div className={`h-[3px] bg-gradient-to-r ${config.cardGradient}`} />
                  )}

                  <div className="p-5 flex flex-col gap-4 flex-1">
                    {/* Header row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {config && Icon && (
                          <div className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${config.cardGradient} shadow-md`}>
                            <Icon className="h-4.5 w-4.5 text-white" />
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-bold text-white leading-none">
                            {config ? config.label : metric.platform}
                          </p>
                          <p className="text-[11px] text-zinc-500 font-medium mt-1">
                            @{metric.username}
                          </p>
                        </div>
                      </div>

                      {/* Engagement Badge */}
                      <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-[var(--theme-color)]/10 text-[var(--theme-color)] border border-[var(--theme-color)]/25">
                        {metric.engagementRate ?? 0}% ENG
                      </span>
                    </div>

                    {/* Followers / Engagement divider details */}
                    <div className="pt-3 border-t border-zinc-800/50 flex items-baseline justify-between mt-auto">
                      <div>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                          Audience Size
                        </p>
                        <p className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
                          {formatFollowers(metric.followers)}
                        </p>
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Card>

      {/* Rate Cards */}
      <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 rounded-2xl shadow-xl hover:border-zinc-700/60 transition-all duration-300">
        <h3 className="mb-6 text-xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--theme-color)]" />
          Commercial Packages
        </h3>

        {rateCards.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 py-12 text-center text-zinc-500 bg-zinc-950/20">
            Add your first package from the editor.
          </div>
        ) : (
          <div className="space-y-5">
            {rateCards.map((card) => (
              <div
                key={card.id}
                className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 hover:border-zinc-700/80 hover:bg-zinc-950/60 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-color)]/5 border-l-4"
                style={{ borderLeftColor: "var(--theme-color)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                  <div className="flex-1 space-y-2">
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {card.deliverable}
                    </h4>
                    <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
                    {/* Price Badge */}
                    <div className="rounded-xl bg-[var(--theme-color)] px-4 py-2 text-center text-white shadow-lg shadow-[var(--theme-color)]/15 border border-[var(--theme-color)]/30">
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-xs font-semibold text-white/80">₹</span>
                        <span className="text-lg font-extrabold tracking-tight">
                          {Math.max(0, card.basePrice ?? 0).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>

                    {/* Delivery Badge */}
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg">
                      <Clock3 className="h-3.5 w-3.5 text-[var(--theme-color)]" />
                      <span>
                        {Math.max(1, card.turnaroundDays ?? 1)} {Math.max(1, card.turnaroundDays ?? 1) === 1 ? "Day" : "Days"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}