import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors",
        variant === "default"
          ? "bg-white text-black hover:bg-zinc-200"
          : "border border-zinc-700 bg-transparent text-white hover:bg-zinc-800",
        className
      )}
      {...props}
    />
  );
}