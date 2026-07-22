"use client";

import { Section } from "../ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const workflowSteps = [
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/icon_human_arch.png" alt="Architecture & Design" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "1. Architecture & Design",
        desc: "Conducting rigorous requirements analysis, system architecture design, and UI/UX planning to establish a robust foundation before writing code."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/fast prototyping icon.jpg" alt="Full-Stack Engineering" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "2. Full-Stack Engineering",
        desc: "Developing secure database designs, performant backend systems, and clean API development for reliable and scalable data transmission."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/icon_ai_bot.png" alt="AI & Automation Integration" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "3. AI Integration",
        desc: "Integrating state-of-the-art LLMs, computer vision pipelines, and intelligent automation agents directly into product workflows."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-white rounded-xl p-0.5 overflow-hidden flex items-center justify-center w-20 h-20">
                    <Image src="/End-to-End Ownership icon.png" alt="Operations & Lifecycle" width={80} height={80} className="rounded-lg object-contain w-full h-full" />
                </div>
            </motion.div>
        ),
        title: "4. Quality & Operations",
        desc: "Implementing automated testing, deploying to cloud infrastructure, setting up telemetry monitoring, and driving continuous product iteration."
    }
];

export function Workflow() {
    return (
        <Section id="workflow" className="py-32">
            <div className="text-center md:text-left mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    AI-Assisted Engineering Workflow
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl font-light">
                    How I design, build, and deploy reliable modern software systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflowSteps.map((item, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-indigo-500/30 transition-all flex flex-col h-full"
                    >
                        <div className="mb-6 p-2 rounded-2xl bg-white/5 w-24 h-24 flex items-center justify-center group-hover:bg-indigo-500/10 transition-colors overflow-hidden">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed flex-1">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
