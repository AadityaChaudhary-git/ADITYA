"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import canvasConfetti from "canvas-confetti";

const blogsData: Record<string, {
  title: string;
  date: string;
  readingTime: string;
  categories: string[];
  accentColor: "yellow" | "red" | "purple" | "green" | "blue";
  content: string[];
  mediumLink?: string;
}> = {
  "from-enter-to-render": {
    title: "From Enter to Render: The Full Journey of an HTTPS Request",
    date: "July 2026",
    readingTime: "8 min read",
    categories: ["Web Architecture", "Networking"],
    accentColor: "yellow",
    mediumLink: "https://medium.com/@arzoodhoundiyal31/from-enter-to-render-the-full-journey-of-an-https-request-6296cbcae6b6",
    content: [
      "Have you ever wondered what actually happens when you type a URL in the browser address bar and press Enter? In this deep-dive article, we trace the full journey of a request from the moment you hit Enter until the page is fully painted on your screen.",
      "We unpack the under-the-hood systems that govern the web, starting with local caches, DNS name server hierarchies, TCP handshakes, and SSL/TLS cryptographic session negotiation.",
      "Furthermore, we dissect the request headers, HTTP/2 multiplexing, backend web server request handling, and the critical rendering path: parsing HTML into DOM trees, building the CSSOM, computing layout geometries, and painting pixels in the browser window.",
    ]
  }
};

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogsData[slug];

  useEffect(() => {
    if (post) {
      canvasConfetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }
  }, [post, slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col justify-between paper-grid bg-neo-bg">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <Card variant="white" className="max-w-md text-center p-12">
            <h1 className="font-space text-6xl font-black mb-4">404</h1>
            <p className="font-inter text-base font-bold text-neutral-600 mb-8">
              Blog article not found!
            </p>
            <Link href="/" className="cursor-none">
              <Button variant="yellow">Back Home</Button>
            </Link>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between paper-grid bg-neo-bg">
      <Header />
      
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16 space-y-12">
        {/* Back Link */}
        <div>
          <Link href="/" className="cursor-none inline-block">
            <Button variant="white" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Article Layout */}
        <Card variant="white" shadowColor={post.accentColor} className="p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 paper-grid opacity-20 pointer-events-none" />
          
          <article className="relative z-10 space-y-8 text-black">
            {/* Meta details */}
            <div className="flex flex-wrap gap-4 items-center text-xs font-bold text-neutral-500 font-space uppercase">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
              <div className="flex gap-1.5">
                {post.categories.map((c) => (
                  <Badge key={c} variant={post.accentColor} className="text-[9px] py-0.5 px-2">
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Title */}
            <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight border-b-4 border-black pb-6 text-black">
              {post.title}
            </h1>

            {/* Body text paragraphs */}
            <div className="space-y-6 font-inter text-base font-semibold leading-relaxed text-neutral-700">
              {post.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Redirect to Medium CTA */}
            {post.mediumLink && (
              <div className="pt-8 border-t-4 border-dashed border-black/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-inter text-sm font-black text-neutral-500 uppercase">
                  This article is published on Medium
                </p>
                <a
                  href={post.mediumLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-none"
                >
                  <Button variant="yellow">
                    Read Full Article on Medium <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            )}
          </article>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
