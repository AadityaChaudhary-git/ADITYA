"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface ButtonProps extends Omit<import("framer-motion").HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  variant?: "yellow" | "red" | "purple" | "green" | "blue" | "black" | "white";
  magnetic?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Button({
  children,
  className,
  variant = "yellow",
  magnetic = false,
  size = "md",
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit pull to 30% of offset
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    yellow: "bg-neo-yellow text-[#111111] hover:bg-[#ffe066]",
    red: "bg-neo-red text-white hover:bg-[#ff8080]",
    purple: "bg-neo-purple text-[#111111] hover:bg-[#c9b5ff]",
    green: "bg-neo-green text-[#111111] hover:bg-[#d4f594]",
    blue: "bg-neo-blue text-[#111111] hover:bg-[#a3e0ff]",
    black: "bg-neo-black text-white hover:bg-neutral-800",
    white: "bg-white text-[#111111] hover:bg-neutral-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-black border-2",
    md: "px-5 py-2.5 text-sm font-black border-4",
    lg: "px-8 py-4 text-base font-black border-4",
    xl: "px-10 py-5 text-lg font-black border-4",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
      className={cn(
        "font-space inline-flex items-center justify-center uppercase tracking-wider transition-all duration-100 ease-out border-neo-black rounded-[4px]",
        "neo-shadow active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--neo-shadow)] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_var(--neo-shadow)]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
