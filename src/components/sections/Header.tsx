
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Journey", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.querySelector(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 20;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b-4 border-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-space text-2xl font-black uppercase tracking-tight text-black dark:text-white cursor-none hover:underline select-none"
        >
          ADITYA.
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="font-space text-sm font-black uppercase tracking-wider text-black dark:text-white hover:underline cursor-none"
            >
              {link.name}
            </button>
          ))}
          <Button variant="yellow" size="sm" onClick={() => scrollTo("#contact")}>
            Let&apos;s Connect
          </Button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden border-2 border-black p-2 bg-white rounded shadow-[2px_2px_0px_0px_#111111] cursor-none"
          title="Toggle Navigation Menu"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 pt-4 border-t-2 border-dashed border-black/25 mt-4 pb-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="font-space text-left text-base font-black uppercase tracking-wider text-black dark:text-white py-1 cursor-none"
            >
              {link.name}
            </button>
          ))}
          <Button variant="yellow" size="sm" className="w-full mt-2" onClick={() => scrollTo("#contact")}>
            Let&apos;s Connect
          </Button>
        </nav>
      )}
    </header>
  );
}

