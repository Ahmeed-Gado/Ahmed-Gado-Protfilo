import { Section } from "../ui/Section";
import Image from "next/image";

const experiences = [
    {
        role: "Software Developer Intern",
        company: "Ace Star Tech System Integration",
        type: "Internship",
        duration: "Mar 2026 – Sep 2026 (Ongoing)",
        logo: "/acestartech.webp",
        description:
            "Actively involved in Full Stack Development, IoT project implementation, and system integration workflows. Gaining hands-on experience bridging hardware and software solutions in a professional engineering environment, applying and expanding academic knowledge in Internet of Things from UniSIRAJ into real-world industry applications.",
        tech: ["Full Stack Development", "IoT Implementation", "System Integration", "Hardware-Software Bridging"],
    },
    {
        role: "Freelance AI & Automation Engineer",
        company: "Self-Employed / Freelance",
        type: "Freelance",
        duration: "2024 - Present",
        logo: "/icon_ai_bot.png",
        description:
            "Design and deploy custom AI automation systems, advanced backend integrations, and LLM workflows. Developed BaldGuard AI (Next.js/FastAPI computer vision web app) and the Smart Email Assistant (an automated intelligence pipeline using LLM agents, n8n, and Telegram Bot API) to deliver production-ready software solutions.",
        tech: ["Next.js", "FastAPI", "Computer Vision", "LLM Workflows", "n8n", "Telegram API", "Firebase"],
    },
    {
        role: "IoT Project Lead & Student Developer",
        company: "UniSiraj ( Tuanku Syed Sirajuddin International Islamic University )",
        type: "Academic",
        duration: "2023 - Present",
        logo: "/unisiraj.jfif",
        description:
            "Lead developer for multiple high-impact end-to-end IoT systems. Built a Smart Parking System capstone with real-time spot detection, cloud dashboards, and mobile access using ESP32 and Firebase. Programmed distributed sensor networks for environmental monitoring using custom firmware, hardware timers, and REST API integration.",
        tech: ["ESP32", "Arduino", "Embedded C", "Firebase RTDB", "Sensors & Actuators", "Hardware Timers"],
    },
    {
        role: "Full Stack Developer",
        company: "SaiKet Systems",
        type: "Experience",
        duration: "2023 - 2024",
        logo: "/SaiKet Systems.jfif",
        description:
            "Developed and maintained full-stack web applications, contributing to both frontend and backend systems. Worked with modern web technologies (React, Next.js, Node.js) to build scalable, production-ready solutions.",
        tech: ["Full-Stack Development", "Next.js", "APIs", "Frontend", "Backend", "Git"],
    },
];

export function Experience() {
    return (
        <Section id="experience" className="py-24 border-t border-white/5">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
                Experience
            </h2>

            <div className="relative space-y-6 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="flex gap-6 group">
                        {/* Icon dot on the timeline */}
                        <div className="shrink-0 mt-1">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-white/20 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                                <Image
                                    src={exp.logo}
                                    alt={exp.company}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-10">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/20 hover:bg-white/[0.07] transition-all">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                            <p className="text-blue-400 font-medium">@ {exp.company}</p>
                                            <span className="text-gray-600 text-xs">•</span>
                                            <p className="text-gray-400 text-xs">{exp.duration}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full self-start sm:self-center bg-white/5">
                                        {exp.type}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
