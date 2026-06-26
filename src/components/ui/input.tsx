import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-zinc-800 bg-[#0d0d12]/50 px-4 text-sm text-white placeholder:text-zinc-500 transition-all duration-200 hover:border-zinc-700/80 focus:border-[var(--theme-color)] focus:bg-zinc-950 focus:ring-2 focus:ring-[var(--theme-color)]/10 focus:outline-none",
        className
      )}
      {...props}
    />
  );
}