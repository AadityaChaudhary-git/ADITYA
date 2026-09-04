

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import canvasConfetti from "canvas-confetti";

const EMAIL = "aditya.879161@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setOpened(true);
    canvasConfetti({ particleCount: 80, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto w-full border-b-4 border-black">
      <div className="mb-20">
        <h2 className="font-space text-5xl md:text-7xl font-black uppercase tracking-tight text-neo-black">
          SAY{" "}
          <span className="bg-neo-green text-black border-4 border-black px-3 py-1 shadow-[4px_4px_0px_0px_#111111] inline-block rotate-[-1deg]">
            HELLO!
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <Card variant="white" className="p-8">
            {opened ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center text-center py-12 space-y-4"
              >
                <div className="border-4 border-black p-4 rounded bg-neo-green shadow-[4px_4px_0px_0px_#111111]">
                  <CheckCircle2 className="h-12 w-12 text-black" />
                </div>
                <h3 className="font-space text-3xl font-black uppercase">EMAIL CLIENT OPENED!</h3>
                <p className="font-inter text-sm font-semibold text-neutral-600 max-w-sm">
                  Your message was prepared in your email client. Send it from there to reach Aditya.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-space text-sm font-black uppercase tracking-wider text-black block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Aditya"
                    className="w-full font-space text-base font-bold outline-none border-4 border-black p-4 rounded-[4px] bg-white transition-all focus:bg-neo-yellow/10 focus:shadow-[4px_4px_0px_0px_#111111]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-space text-sm font-black uppercase tracking-wider text-black block">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full font-space text-base font-bold outline-none border-4 border-black p-4 rounded-[4px] bg-white transition-all focus:bg-neo-blue/10 focus:shadow-[4px_4px_0px_0px_#111111]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-space text-sm font-black uppercase tracking-wider text-black block">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Aditya, I'd like to connect..."
                    className="w-full font-space text-base font-bold outline-none border-4 border-black p-4 rounded-[4px] bg-white transition-all focus:bg-neo-green/10 focus:shadow-[4px_4px_0px_0px_#111111]"
                  />
                </div>

                <Button type="submit" variant="yellow" className="w-full" size="lg">
                  <span className="flex items-center gap-2">
                    SEND MESSAGE <Send className="h-4 w-4" />
                  </span>
                </Button>
              </form>
            )}
          </Card>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <h3 className="font-space text-2xl font-black uppercase tracking-wide text-neutral-500 mb-2">
            CONNECT ELSEWHERE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <a href={`mailto:${EMAIL}`} className="flex cursor-none">
              <Card variant="white" shadowColor="red" tilt className="p-5 flex items-center gap-4 w-full">
                <div className="border-2 border-black p-2.5 rounded bg-neo-red/10 shadow-[2px_2px_0px_0px_#111111]">
                  <Mail className="h-5 w-5 text-neo-red" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-black uppercase">Email Me</h4>
                  <p className="font-inter text-xs font-semibold text-neutral-500">{EMAIL}</p>
                </div>
              </Card>
            </a>

            <a
              href="https://www.linkedin.com/in/aaditya-chaudhary-3a322b329/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none"
            >
              <Card variant="white" shadowColor="blue" tilt className="p-5 flex items-center gap-4 w-full">
                <div className="border-2 border-black p-2.5 rounded bg-neo-blue/10 shadow-[2px_2px_0px_0px_#111111]">
                  <LinkedinIcon className="h-5 w-5 text-neo-blue" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-black uppercase">LinkedIn</h4>
                  <p className="font-inter text-xs font-semibold text-neutral-500">Aditya Chaudhary</p>
                </div>
              </Card>
            </a>

            <a
              href="https://github.com/AadityaChaudhary-git"
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-none"
            >
              <Card variant="white" shadowColor="purple" tilt className="p-5 flex items-center gap-4 w-full">
                <div className="border-2 border-black p-2.5 rounded bg-neo-purple/10 shadow-[2px_2px_0px_0px_#111111]">
                  <GithubIcon className="h-5 w-5 text-neo-purple" />
                </div>
                <div>
                  <h4 className="font-space text-sm font-black uppercase">GitHub</h4>
                  <p className="font-inter text-xs font-semibold text-neutral-500">@AadityaChaudhary-git</p>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
