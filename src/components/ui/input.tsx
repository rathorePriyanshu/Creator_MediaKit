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
        "h-11 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 text-sm text-white placeholder:text-zinc-500 focus:border-white focus:outline-none",
        className
      )}
      {...props}
    />
  );
}