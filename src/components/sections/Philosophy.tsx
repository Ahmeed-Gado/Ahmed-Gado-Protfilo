"use client";

import { Section } from "../ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

const philosophies = [
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/icon_ai_bot.png" alt="AI-Assisted Development" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "AI-Assisted Development",
        desc: "Leveraging cutting-edge AI tools to write boilerplate, brainstorm architectures, and accelerate the coding process."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/icon_human_arch.png" alt="Human-Guided Architecture" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "Human-Guided Architecture",
        desc: "AI writes the code, but a human sets the rules. Designing robust system architectures and API-driven interfaces is my priority."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Image src="/fast prototyping icon.jpg" alt="Fast Prototyping" width={80} height={80} className="rounded-xl object-contain" />
            </motion.div>
        ),
        title: "Fast Prototyping",
        desc: "Moving from an idea to a working prototype in days, not months. A production-ready mindset applied to rapid MVPs."
    },
    {
        icon: (
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-white rounded-xl p-0.5 overflow-hidden flex items-center justify-center w-20 h-20">
                    <Image src="/End-to-End Ownership icon.png" alt="End-to-End Ownership" width={80} height={80} className="rounded-lg object-contain w-full h-full" />
                </div>
            </motion.div>
        ),
        title: "End-to-End Ownership",
        desc: "From the first line of code to the final deployment on cloud infrastructure, taking full responsibility for the product."
    }
];

export function Philosophy() {
    return (
        <Section id="philosophy" className="py-32">
            <div className="text-center md:text-left mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Vibe Coding Philosophy
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl font-light">
                    How I approach modern software engineering in the age of AI.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {philosophies.map((item, index) => (
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
