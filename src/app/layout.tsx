import type { Metadata } from "next";
import "./globals.css";

import Chatbot from "@/components/Chatbot";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Ahmeed's Portfolio",
  description: "Professional Portfolio of Ahmeed Gado — AI Engineer, IoT Developer & Full-Stack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-indigo-500/30">
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
