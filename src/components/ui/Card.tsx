"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "yellow" | "red" | "purple" | "green" | "blue" | "white" | "black" | "transparent";
  shadowColor?: "yellow" | "red" | "purple" | "green" | "blue" | "black";
  tilt?: boolean;
}

export default function Card({
  children,
  className,
  variant = "white",
  shadowColor,
  tilt = false,
  ...props
}: CardProps) {
  const [hoverRotation, setHoverRotation] = useState("");

  const variantStyles = {
    white: "bg-white text-black",
    black: "bg-neo-black text-white border-white",
    yellow: "bg-neo-yellow text-black",
    red: "bg-neo-red text-white",
    purple: "bg-neo-purple text-black",
    green: "bg-neo-green text-black",
    blue: "bg-neo-blue text-black",
    transparent: "bg-transparent text-black",
  };

  const shadowStyles = {
    yellow: "hover:shadow-[8px_8px_0px_0px_#FFD84D]",
    red: "hover:shadow-[8px_8px_0px_0px_#FF6B6B]",
    purple: "hover:shadow-[8px_8px_0px_0px_#B79DFF]",
    green: "hover:shadow-[8px_8px_0px_0px_#C9F27B]",
    blue: "hover:shadow-[8px_8px_0px_0px_#8ED8FF]",
    black: "hover:shadow-[8px_8px_0px_0px_#111111]",
  };

  const rotations = [
    "hover:rotate-[-1deg]",
    "hover:rotate-[1deg]",
    "hover:rotate-[-0.5deg]",
    "hover:rotate-[0.5deg]"
  ];

  useEffect(() => {
    if (tilt) {
      const idx = Math.floor(Math.random() * rotations.length);
      setHoverRotation(rotations[idx]);
    }
  }, [tilt]);

  return (
    <div
      className={cn(
        "neo-border rounded-[4px] p-6 transition-all duration-300 ease-out",
        "neo-shadow hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[8px_8px_0px_0px_var(--neo-shadow)]",
        variantStyles[variant],
        shadowColor && shadowStyles[shadowColor],
        tilt && hoverRotation,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
