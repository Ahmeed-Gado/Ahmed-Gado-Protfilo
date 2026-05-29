"use client";

import { Section } from "../ui/Section";
import { motion } from "framer-motion";

const stackData = [
    {
        category: "Programming & Frameworks",
        emoji: "⚡",
        color: "from-blue-500/20 to-cyan-500/10",
        border: "hover:border-blue-500/40",
        accent: "text-blue-400",
        items: ["JavaScript", "TypeScript", "Python", "C/C++", "HTML/CSS", "Next.js", "FastAPI"]
    },
    {
        category: "AI & Automation",
        emoji: "🤖",
        color: "from-purple-500/20 to-pink-500/10",
        border: "hover:border-purple-500/40",
        accent: "text-purple-400",
        items: ["Computer Vision", "LLM Workflow Automation", "Prompt Engineering", "AI API Integration", "AI Coding Assistants (Antigravity)", "N8N"]
    },
    {
        category: "Cloud, Databases & APIs",
        emoji: "☁️",
        color: "from-cyan-500/20 to-teal-500/10",
        border: "hover:border-cyan-500/40",
        accent: "text-cyan-400",
        items: ["Firebase (Hosting, RTDB, Auth)", "REST APIs", "Google Services", "Telegram Bot API", "GitHub"]
    },
    {
        category: "Embedded Systems & IoT",
        emoji: "🔌",
        color: "from-green-500/20 to-emerald-500/10",
        border: "hover:border-green-500/40",
        accent: "text-green-400",
        items: ["ESP32", "Arduino", "PicoW", "Sensors", "WiFi Connectivity", "MQTT"]
    }
];

export function TechStack() {
    return (
        <Section id="tech-stack" className="py-32 relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
            </div>

            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto font-light"
                >
                    The tools and technologies I use to rapidly build full-stack applications and IoT systems.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
                {stackData.map((stack, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 0.5,
                            delay: idx * 0.15,
                            y: { duration: 4 + idx * 0.7, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }
                        }}
                        className={`p-8 rounded-3xl bg-gradient-to-br ${stack.color} border border-white/10 ${stack.border} transition-all cursor-default`}
                    >
                        {/* Card header */}
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                            <span className="text-2xl">{stack.emoji}</span>
                            <span>{stack.category}</span>
                        </h3>

                        {/* Skills list */}
                        <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
                            {stack.items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 + i * 0.05 }}
                                    className="flex items-center gap-2 text-gray-300 text-sm group"
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${stack.accent.replace("text-", "bg-")} shrink-0 group-hover:scale-150 transition-transform`} />
                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
