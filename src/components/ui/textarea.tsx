import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Textarea({
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full rounded-xl border border-zinc-800 bg-[#0d0d12]/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-all duration-200 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:bg-zinc-950 focus:ring-2 focus:ring-[var(--theme-color)]/10 focus:outline-none resize-none",
        className
      )}
      {...props}
    />
  );
}