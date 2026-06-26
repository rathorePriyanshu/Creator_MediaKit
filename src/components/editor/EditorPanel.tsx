"use client";

import { BadgeIndianRupee, BarChart3, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/profile/ProfileForm";
import ThemeColorPicker from "./ThemeColorPicker";
import MetricsForm from "../metrics/MetricForm";
import RateCardsForm from "../rate-card/RateCardForms";
import { useFormContext, useWatch } from "react-hook-form";
import { CreatorKitInput } from "@/lib/validations";

export default function EditorPanel() {
  const { control } = useFormContext<CreatorKitInput>();
  const themeColor = useWatch({
    control,
    name: "profile.themeColor",
  }) || "#6366F1";

  return (
    <div
      className="space-y-8"
      style={{
        "--theme-color": themeColor,
        "--ring": themeColor
      } as React.CSSProperties}
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          Creator Media Kit
        </h1>
        <p className="text-sm text-zinc-400 font-medium">
          Configure your professional creator identity, metrics, and premium packages.
        </p>
      </div>

      <Separator className="bg-zinc-800/60" />

      {/* Profile Section */}
      <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl">
        <div className="mb-6 flex items-center gap-4 pb-5 border-b border-zinc-800/50">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] transition-all duration-300 shadow-inner">
            <User className="h-5.5 w-5.5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white leading-none">
              Profile Identity
            </h2>
            <p className="text-xs text-zinc-400 mt-1.5 font-medium">
              Define your basic creator information, avatar, and background story.
            </p>
          </div>
        </div>
        <ProfileForm />
      </Card>

      {/* Theme Color Picker Section */}
      <ThemeColorPicker />

      {/* Metrics Section */}
      <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl">
        <div className="mb-6 flex items-center gap-4 pb-5 border-b border-zinc-800/50">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] transition-all duration-300 shadow-inner">
            <BarChart3 className="h-5.5 w-5.5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white leading-none">
              Live Verified Metrics
            </h2>
            <p className="text-xs text-zinc-400 mt-1.5 font-medium">
              Showcase your audience count and engagement rate across multiple platforms.
            </p>
          </div>
        </div>
        <MetricsForm />
      </Card>

      {/* Rate Cards Section */}
      <Card className="border-[#27272a]/60 bg-[#18181b]/60 p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-zinc-700/60 transition-all duration-300 rounded-2xl">
        <div className="mb-6 flex items-center gap-4 pb-5 border-b border-zinc-800/50">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--theme-color)]/10 text-[var(--theme-color)] transition-all duration-300 shadow-inner">
            <BadgeIndianRupee className="h-5.5 w-5.5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white leading-none">
              Commercial Rate Cards
            </h2>
            <p className="text-xs text-zinc-400 mt-1.5 font-medium">
              Create pricing packages and deliverable structures for brands.
            </p>
          </div>
        </div>
        <RateCardsForm />
      </Card>
    </div>
  );
}