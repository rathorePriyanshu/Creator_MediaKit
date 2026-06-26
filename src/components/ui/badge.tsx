import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement> { }

export function Badge({
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-200",
        className
      )}
      {...props}
    />
  );
}