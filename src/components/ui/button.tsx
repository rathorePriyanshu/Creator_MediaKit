import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost" | "danger";
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-color)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d12] disabled:opacity-50 disabled:pointer-events-none select-none",
        variant === "default" && "bg-white text-black hover:bg-zinc-200 shadow-sm",
        variant === "primary" && "bg-[var(--theme-color)] text-white hover:bg-[var(--theme-color)]/90 shadow-md shadow-[var(--theme-color)]/15",
        variant === "secondary" && "border border-[#27272a] bg-[#18181b] text-zinc-100 hover:bg-zinc-800 hover:text-white shadow-sm",
        variant === "outline" && "border border-zinc-700 bg-transparent text-white hover:bg-zinc-800",
        variant === "ghost" && "bg-transparent text-zinc-400 hover:bg-zinc-900/60 hover:text-white",
        variant === "danger" && "bg-red-950/20 text-red-400 border border-red-900/30 hover:bg-red-600 hover:text-white",
        className
      )}
      {...props}
    />
  );
}