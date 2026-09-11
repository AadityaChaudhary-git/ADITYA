"use client";

import React from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 paper-grid bg-neo-bg">
      <Card
        variant="white"
        shadowColor="red"
        className="max-w-md text-center p-12 hover:rotate-[-1deg]"
      >
        <h1 className="font-space text-8xl font-black mb-4 tracking-tighter text-neo-red">
          404
        </h1>
        <h2 className="font-space text-2xl font-black uppercase mb-4 text-black">
          OUT OF BOUNDS
        </h2>
        <p className="font-inter text-sm font-semibold text-neutral-600 mb-8">
          The page or resource you are looking for has been moved, renamed, or is currently compiling in another dimension.
        </p>
        <Link href="/" className="cursor-none">
          <Button variant="yellow" size="lg">
            Back to Home
          </Button>
        </Link>
      </Card>
    </div>
  );
}
