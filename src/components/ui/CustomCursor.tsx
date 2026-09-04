"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const [hoverType, setHoverType] = useState<
    "link" | "view" | "project" | "text" | null
  >(null);

  useEffect(() => {
    document.body.classList.add("custom-cursor-active");

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.transform = `translate3d(${mouseX - 14}px, ${mouseY - 14}px, 0)`;
    };

    const updateFollower = () => {
      const ease = 0.15;

      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      follower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;

      requestAnimationFrame(updateFollower);
    };

    window.addEventListener("mousemove", onMouseMove);

    const animId = requestAnimationFrame(updateFollower);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const hoverable = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      );

      if (hoverable) {
        const type = hoverable.getAttribute("data-cursor") as
          | "view"
          | "project"
          | "text"
          | null;

        if (type) {
          setHoverType(type);
        } else {
          setHoverType("link");
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const hoverable = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      );

      if (hoverable) {
        setHoverType(null);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);

      document.body.classList.remove("custom-cursor-active");

      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Primary Cross */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-7 w-7"
      >
        <span className="absolute left-1/2 top-0 h-7 w-[6px] -translate-x-1/2 bg-red-500" />

        <span className="absolute left-0 top-1/2 h-[6px] w-7 -translate-y-1/2 bg-red-500" />

        <span className="absolute left-[14px] top-[3px] h-7 w-[3px] bg-red-700" />

        <span className="absolute left-[3px] top-[14px] h-[3px] w-7 bg-red-700" />
      </div>

      {/* Follower Ring */}
      <div
        ref={followerRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9998] flex items-center justify-center rounded-full border-2 border-neo-black bg-transparent transition-all duration-300 custom-cursor-ring ${
          hoverType === "link"
            ? "h-14 w-14 bg-neo-yellow/30 scale-100 border-dashed"
            : hoverType === "view"
            ? "h-16 w-16 bg-neo-green scale-110 border-solid"
            : hoverType === "project"
            ? "h-20 w-20 bg-neo-blue scale-110 border-solid"
            : hoverType === "text"
            ? "h-8 w-4 rounded-[4px] border-l-2 border-r-2 border-t-0 border-b-0 border-neo-black scale-100"
            : "h-10 w-10"
        }`}
      >
        {hoverType === "view" && (
          <span className="font-space text-[9px] font-black tracking-widest text-black">
            VIEW
          </span>
        )}

        {hoverType === "project" && (
          <span className="font-space text-[9px] font-black tracking-widest text-black">
            CASE
          </span>
        )}
      </div>
    </>
  );
}