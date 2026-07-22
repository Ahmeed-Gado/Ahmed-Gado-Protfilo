"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-12">
            {/* Background grid effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-24 pb-16">
                {/* LEFT COLUMN — Text Content */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">AI • IoT • Full-Stack Engineer</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                            <span className="text-white">Ahmeed </span>
                            <span className="text-blue-400">Gado</span>
                        </h1>
                        <p className="text-xl font-semibold text-gray-200 mt-3">
                            AI Engineer • IoT Developer • Full-Stack Software Engineer
                        </p>
                        <p className="text-blue-400 italic text-base mt-1">
                            Building intelligent software, connected systems, and AI-powered products.
                        </p>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 leading-relaxed max-w-lg"
                    >
                        I design and build scalable software that combines AI, cloud technologies, and IoT to solve real-world problems. From rapid MVPs to production-ready applications, I focus on clean architecture, automation, and delivering products that create measurable impact.
                    </motion.p>

                    {/* Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                    >
                        <MapPin size={14} className="text-blue-400" />
                        <span>Kuala Lumpur, Malaysia</span>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap gap-3 pt-2"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-colors group text-sm"
                        >
                            View Projects
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="/ahmed-gado-cv.pdf"
                            download="Ahmed_Gado_CV.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-transparent text-white font-semibold border border-blue-500/40 hover:border-blue-400 hover:bg-blue-500/10 transition-colors text-sm group"
                        >
                            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-gray-300 font-medium border border-white/10 hover:bg-white/10 transition-colors text-sm"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex gap-3 pt-2"
                    >
                        <a href="https://github.com/Ahmeed-Gado" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-jado-88a932365/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="https://wa.me/601156786978" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#25D366]/10 rounded-lg border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 transition-all" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT COLUMN — Profile Photo */}
                <div className="flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Floating animation wrapper */}
                        <motion.div
                            animate={{ y: [0, -16, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            {/* Glow ring behind photo */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 via-indigo-500/20 to-transparent blur-2xl scale-110" />

                            {/* Photo frame */}
                            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10">
                                <Image
                                    src="/personal pic.png"
                                    alt="Ahmeed Gado — AI, IoT & Full-Stack Engineer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#050505]/80 to-transparent" />
                            </div>

                            {/* Floating tag: status */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-4 -left-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 shadow-xl"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-sm text-gray-300 font-medium">Open to opportunities</span>
                            </motion.div>

                            {/* Floating tag: tech */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 shadow-xl"
                            >
                                <span className="text-sm text-blue-300 font-medium">IoT · AI · Full-Stack</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
