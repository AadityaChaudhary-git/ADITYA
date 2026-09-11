import React from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "yellow" | "red" | "purple" | "green" | "blue" | "white" | "black";
}

export default function Badge({ children, className, variant = "yellow", ...props }: BadgeProps) {
  const variantStyles = {
    yellow: "bg-neo-yellow text-black border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    red: "bg-neo-red text-white border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    purple: "bg-neo-purple text-black border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    green: "bg-neo-green text-black border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    blue: "bg-neo-blue text-black border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    white: "bg-white text-black border-black shadow-[2px_2px_0px_0px_var(--neo-border)]",
    black: "bg-neo-black text-white border-white shadow-[2px_2px_0px_0px_var(--neo-border)]",
  };

  return (
    <span
      className={cn(
        "font-space text-xs font-black uppercase tracking-wider px-3 py-1 border-2 rounded-[4px] inline-flex items-center gap-1.5",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
