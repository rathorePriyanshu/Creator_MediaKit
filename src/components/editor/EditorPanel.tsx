"use client";

import { BadgeIndianRupee, BarChart3, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/components/profile/ProfileForm";
import MetricsForm from "../metrics/MetricForm";
import RateCardsForm from "../rate-card/RateCardForms";

export default function EditorPanel() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Creator Media Kit
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Build your professional creator portfolio.
        </p>

      </div>

      <Separator />


      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <div className="mb-6 flex items-center gap-3">

          <User className="h-5 w-5 text-indigo-400" />

          <div>

            <h2 className="text-lg font-semibold">
              Profile Identity
            </h2>

            <p className="text-xs text-zinc-500">
              Basic creator information
            </p>

          </div>

        </div>

        <ProfileForm />

      </Card>


      <Card className="border-zinc-800 bg-zinc-900 p-6">
        <div className="mb-6 flex items-center gap-3">
          <BarChart3 className="h-5 w-5 text-indigo-400" />

          <div>
            <h2 className="text-lg font-semibold">
              Live Verified Metrics
            </h2>

            <p className="text-xs text-zinc-500">
              Showcase your audience across platforms.
            </p>
          </div>
        </div>

        <MetricsForm />
      </Card>

      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <div className="mb-6 flex items-center gap-3">

          <BadgeIndianRupee className="h-5 w-5 text-indigo-400" />

          <div>

            <h2 className="text-lg font-semibold">
              Commercial Rate Cards
            </h2>

            <p className="text-xs text-zinc-500">
              Create pricing packages for brands.
            </p>

          </div>

        </div>

        <RateCardsForm />

      </Card>

    </div>
  );
}