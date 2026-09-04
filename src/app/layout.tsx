
import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/client-shell";

export const metadata: Metadata = {
  title: "Aditya Chaudhary | Data Analyst & Python Enthusiast",
  description:
    "Portfolio of Aditya Chaudhary, an MCA student focused on Data Analytics, Python, SQL, and Machine Learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-inter">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}