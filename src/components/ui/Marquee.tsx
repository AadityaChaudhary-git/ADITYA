"use client";

import React from "react";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  text: string;
  speed?: "slow" | "fast";
  className?: string;
  outline?: boolean;
  variant?: "yellow" | "red" | "purple" | "green" | "blue" | "white" | "black";
}

export default function Marquee({
  text,
  speed = "slow",
  className,
  outline = false,
  variant = "yellow",
}: MarqueeProps) {
  const repeatedText = Array(12).fill(text).join(" • ");

  const variantStyles = {
    yellow: "bg-neo-yellow border-black text-black",
    red: "bg-neo-red border-black text-white",
    purple: "bg-neo-purple border-black text-black",
    green: "bg-neo-green border-black text-black",
    blue: "bg-neo-blue border-black text-black",
    white: "bg-white border-black text-black",
    black: "bg-neo-black border-white text-white",
  };

  return (
    <div
      className={cn(
        "overflow-hidden border-t-4 border-b-4 py-4 flex select-none",
        variantStyles[variant],
        className
      )}
    >
      <div className="whitespace-nowrap flex shrink-0 min-w-full justify-around gap-4">
        <div
          className={cn(
            "font-space text-4xl md:text-6xl font-black uppercase tracking-widest pr-4",
            outline && "text-transparent [-webkit-text-stroke:2px_var(--neo-border)]",
            speed === "slow" ? "animate-marquee-slow" : "animate-marquee-fast"
          )}
        >
          {repeatedText}
        </div>
        <div
          className={cn(
            "font-space text-4xl md:text-6xl font-black uppercase tracking-widest pr-4",
            outline && "text-transparent [-webkit-text-stroke:2px_var(--neo-border)]",
            speed === "slow" ? "animate-marquee-slow" : "animate-marquee-fast"
          )}
          aria-hidden="true"
        >
          {repeatedText}
        </div>
      </div>
    </div>
  );
}
