"use client";

import { User, BarChart3, BadgeIndianRupee } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function EditorPanel() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Creator Media Kit
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Customize your profile and instantly preview your
          creator portfolio.
        </p>
      </div>

      <Separator />


      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <div className="mb-4 flex items-center gap-3">

          <User className="h-5 w-5 text-indigo-400" />

          <h2 className="text-lg font-semibold">
            Profile Identity
          </h2>

        </div>

        <div className="rounded-md border border-dashed border-zinc-700 p-6 text-center">

          <p className="text-sm text-zinc-500">
            Profile form will be added in the next phase.
          </p>

        </div>

      </Card>


      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <div className="mb-4 flex items-center gap-3">

          <BarChart3 className="h-5 w-5 text-indigo-400" />

          <h2 className="text-lg font-semibold">
            Social Metrics
          </h2>

        </div>

        <div className="rounded-md border border-dashed border-zinc-700 p-6 text-center">

          <p className="text-sm text-zinc-500">
            Metrics form will be added in the next phase.
          </p>

        </div>

      </Card>


      <Card className="border-zinc-800 bg-zinc-900 p-6">

        <div className="mb-4 flex items-center gap-3">

          <BadgeIndianRupee className="h-5 w-5 text-indigo-400" />

          <h2 className="text-lg font-semibold">
            Commercial Rate Cards
          </h2>

        </div>

        <div className="rounded-md border border-dashed border-zinc-700 p-6 text-center">

          <p className="text-sm text-zinc-500">
            Commercial packages will be added in the next phase.
          </p>

        </div>

      </Card>

    </div>
  );
}