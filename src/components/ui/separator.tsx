import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
}

export function Separator({
  className,
  orientation = "horizontal",
}: SeparatorProps) {
  return (
    <div
      className={cn(
        orientation === "horizontal"
          ? "h-px w-full bg-zinc-800"
          : "w-px h-full bg-zinc-800",
        className
      )}
    />
  );
}