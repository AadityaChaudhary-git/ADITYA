
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, ArrowRight, Sparkles, Moon, Sun } from "lucide-react";
import canvasConfetti from "canvas-confetti";

interface CommandPaletteProps {
  onToggleTheme: () => void;
  isDarkMode: boolean;
}

export default function CommandPalette({ onToggleTheme, isDarkMode }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = [
    {
      title: "Jump to Hero",
      type: "navigation",
      handler: () => scrollToSection("#hero"),
      icon: ArrowRight,
    },
    {
      title: "Jump to About",
      type: "navigation",
      handler: () => scrollToSection("#about"),
      icon: ArrowRight,
    },
    {
      title: "Jump to Experience",
      type: "navigation",
      handler: () => scrollToSection("#experience"),
      icon: ArrowRight,
    },
    {
      title: "Jump to Skills",
      type: "navigation",
      handler: () => scrollToSection("#skills"),
      icon: ArrowRight,
    },
    {
      title: "Jump to Projects",
      type: "navigation",
      handler: () => scrollToSection("#projects"),
      icon: ArrowRight,
    },
    {
      title: "Jump to Achievements",
      type: "navigation",
      handler: () => scrollToSection("#achievements"),
      icon: ArrowRight,
    },
    {
      title: "Jump to Contact",
      type: "navigation",
      handler: () => scrollToSection("#contact"),
      icon: ArrowRight,
    },
    {
      title: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
      type: "action",
      handler: () => {
        onToggleTheme();
        setIsOpen(false);
      },
      icon: isDarkMode ? Sun : Moon,
    },
    {
      title: "Celebration Confetti!",
      type: "action",
      handler: () => {
        canvasConfetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#FFD84D", "#FF6B6B", "#B79DFF", "#C9F27B", "#8ED8FF"],
        });
        setIsOpen(false);
      },
      icon: Sparkles,
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      // Offset scroll for navbar
      const yOffset = -20;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].handler();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setSelectedIndex(0);
      setSearch("");
    }
  }, [isOpen]);



  return (
    <>
      {/* Floating KBD Help Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 border-4 border-black bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-black shadow-[4px_4px_0px_0px_#111111] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#111111] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#111111] cursor-none"
        title="Open Command Menu"
      >
        <Command className="h-4 w-4" />
        <span className="font-space">Menu</span>
        <kbd className="rounded border border-black bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold shadow-[1px_1px_0px_0px_#111111]">Ctrl+K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#FFF8EF]/80 dark:bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-xl overflow-hidden border-4 border-black bg-white text-black shadow-[8px_8px_0px_0px_#111111] rounded-[4px] z-10"
            >
              {/* Search Header */}
              <div className="flex items-center border-b-4 border-black p-4">
                <Search className="mr-3 h-6 w-6 text-neutral-500" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full font-space text-lg font-bold outline-none placeholder-neutral-400"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded border-2 border-black px-2 py-0.5 text-xs font-black shadow-[2px_2px_0px_0px_#111111]"
                >
                  ESC
                </button>
              </div>

              {/* Items List */}
              <div className="max-h-[350px] overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item: any, idx: number) => {
                    const Icon = item.icon;
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={item.title}
                        onClick={item.handler}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`flex items-center justify-between rounded px-4 py-3 cursor-none border-2 transition-all ${
                          isSelected
                            ? "bg-neo-yellow border-black shadow-[3px_3px_0px_0px_#111111] translate-x-[-2px] translate-y-[-2px]"
                            : "bg-transparent border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" />
                          <span className="font-space font-bold text-sm tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-black uppercase text-neutral-500 bg-neutral-100 border border-black px-1.5 py-0.5 rounded shadow-[1px_1px_0px_0px_#111111]">
                          {item.type}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-8 text-center text-neutral-500 font-space font-bold">
                    No results found for &quot;{search}&quot;
                  </div>
                )}
              </div>

              {/* Helper Footer */}
              <div className="flex justify-between items-center bg-neutral-50 border-t-4 border-black p-3 text-[10px] font-bold text-neutral-500 font-space uppercase">
                <div className="flex gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>Command Menu</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

