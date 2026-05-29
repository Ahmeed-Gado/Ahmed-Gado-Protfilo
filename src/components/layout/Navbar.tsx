"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
            isScrolled ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
        )}>
            <nav className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div className="flex-1 md:flex-none" />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors tracking-wide"
                        >
                            {link.name.toUpperCase()}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <a
                    href="/ahmed-gado-cv.pdf"
                    download="Ahmed_Gado_CV.pdf"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors"
                >
                    <Download size={14} />
                    DOWNLOAD CV
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 pb-6 overflow-hidden"
                    >
                        <div className="flex flex-col gap-1 pt-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-400 hover:text-white py-3 border-b border-white/5 text-sm tracking-wider"
                                >
                                    {link.name.toUpperCase()}
                                </a>
                            ))}
                            <a
                                href="/ahmed-gado-cv.pdf"
                                download="Ahmed_Gado_CV.pdf"
                                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors"
                            >
                                <Download size={14} />
                                DOWNLOAD CV
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
