"use client";

import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type Cert = {
    title: string;
    issuer: string;
    color: string;
    glowClass: string;
    badge: string;
    image?: string;
    link?: string;
};

const certifications: Cert[] = [
    {
        title: "Build Intelligent Agents Using DeepSeek & N8N",
        issuer: "n8n & DeepSeek AI Academy",
        color: "from-purple-600/30 to-fuchsia-600/10",
        glowClass: "hover:shadow-purple-500/20",
        badge: "🤖",
        image: "/Build Intelligent Agents Using DeepSeek & N8N.png",
    },
    {
        title: "Introduction to the Internet of Things and Embedded Systems",
        issuer: "University of California, Irvine (via Coursera)",
        color: "from-emerald-600/30 to-teal-600/10",
        glowClass: "hover:shadow-emerald-500/20",
        badge: "🔌",
        image: "/IntroductiontotheInternetofThingsandEmbeddedSystem.png",
    },
    {
        title: "Prompt Engineering for Everyone",
        issuer: "Coursera / AI Academy",
        color: "from-pink-600/30 to-rose-600/10",
        glowClass: "hover:shadow-pink-500/20",
        badge: "🤖",
    },
    {
        title: "Introduction to IoT & Digital Transformation",
        issuer: "Cisco Networking Academy",
        color: "from-blue-600/30 to-cyan-600/10",
        glowClass: "hover:shadow-blue-500/20",
        badge: "🌐",
        image: "/Introduction to IoT & Digital Transformation.PNG",
    },
    {
        title: "Programming with IoT Boards",
        issuer: "POSTECH (via Coursera)",
        color: "from-indigo-600/30 to-purple-600/10",
        glowClass: "hover:shadow-indigo-500/20",
        badge: "🔌",
        image: "/Programming with IoT Boards POSTECH.PNG",
    },
];

export function Certifications() {
    return (
        <Section id="certifications" className="py-32">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
                >
                    Credentials
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                >
                    Continuous learning and professional certification in AI, IoT, and emerging technologies.
                </motion.p>
            </div>

            {/* Cert Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.03 }}
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.15,
                            y: {
                                duration: 4 + idx * 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: idx * 0.6,
                            },
                        }}
                        className={`group relative rounded-3xl overflow-hidden border border-white/10 hover:border-white/25 shadow-lg ${cert.glowClass} hover:shadow-xl transition-all`}
                    >
                        {/* Image / placeholder area */}
                        <div className={`relative h-44 w-full bg-gradient-to-br ${cert.color} flex items-center justify-center overflow-hidden`}>
                            {cert.image ? (
                                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
                            ) : (
                                <motion.span
                                    animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3 + idx * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-6xl select-none"
                                >
                                    {cert.badge}
                                </motion.span>
                            )}
                            {/* Bottom fade to card */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-[#0a0a0a]">
                            <h4 className="text-white font-semibold text-base leading-snug mb-1 group-hover:text-indigo-300 transition-colors">
                                {cert.title}
                            </h4>
                            <p className="text-gray-500 text-sm">{cert.issuer}</p>
                            {cert.link && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 mt-3 transition-colors"
                                >
                                    View Certificate <ExternalLink size={12} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LinkedIn achievement banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 max-w-5xl mx-auto p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-transparent border border-amber-500/20 flex items-center gap-5"
            >
                <motion.span
                    animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl select-none"
                >
                    🏆
                </motion.span>
                <div>
                    <p className="text-white font-semibold text-lg">1,000+ LinkedIn Followers</p>
                    <p className="text-gray-400 text-sm">
                        Professional Network Achievement — Growing community in AI, IoT & Tech
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
