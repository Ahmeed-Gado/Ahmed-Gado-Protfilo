"use client";

import { Section } from "../ui/Section";
import { Github, Linkedin, ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    linkedin?: string;
    image?: string;
    live?: string;
    video?: string;
};

const projects: Project[] = [
    {
        title: "Smart Parking System",
        description: "End-to-end intelligent IoT parking platform with real-time spot detection, cloud dashboard, and mobile access. Built as my main engineering project at UniSiraj.",
        tech: ["ESP32", "Firebase", "Web Dashboard", "Ultrasonic Sensors", "IoT"],
        github: "https://github.com/Ahmeed-Gado/UniSiraj-IOT-Prking-System",
        live: "https://unisiraj-parking-2026.web.app/parking",
        image: "/smart parking project pic.png",
    },
    {
        title: "BaldGuard AI",
        description: "AI-powered full-stack web application that detects early signs of hair thinning using computer vision models. Features real-time image analysis and a clean, modern UI.",
        tech: ["Next.js", "FastAPI", "Computer Vision", "Firebase Hosting", "Tailwind CSS"],
        github: "https://github.com/Ahmeed-Gado/-BaldAi",
        linkedin: "https://www.linkedin.com/posts/ahmed-jado-88a932365_baldguard-aiprojects-fullstack-activity-7428350835463540736-farx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFq6gWoBAQjWMA4-DKqGlKlS-yxgaAuioR0",
        image: "/baldai project.png",
    },
    {
        title: "Smart Email Assistant",
        description: "Intelligent automation pipeline that classifies emails by intent, generates AI summaries, and routes alerts via Telegram — all without manual intervention.",
        tech: ["LLM Automation", "REST APIs", "Google Sheets", "Telegram Bot", "Workflow AI"],
        github: "#",
        image: "/Smart Email Assistant.png",
    },
    {
        title: "Environmental Monitoring System",
        description: "Real-time IoT platform for monitoring soil moisture, temperature, and environmental data using a distributed sensor network with live cloud dashboard.",
        tech: ["IoT Sensors", "ESP32", "Firebase", "Real-time DB", "Dashboard"],
        github: "#",
        image: "/Environmental Monitoring System.png",
        video: "https://drive.google.com/file/d/12IJpIFa0GA-EXn1jf09J1EbPtijJbO1m/view",
    },
    {
        title: "IoT Car Speed Detection",
        description: "Embedded hardware system that measures and displays vehicle speed in real time using precise hardware timers and sensor arrays on a microcontroller.",
        tech: ["Embedded C", "Microcontrollers", "Hardware Timers", "Sensors", "LCD Display"],
        github: "#",
        image: "/Arduino-IR-Sensor-Car-speed.jpg",
    },
    {
        title: "Saham",
        description: "Modern marketing agency website built to deliver high-performance, dynamic, and localized brand experiences.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
        github: "#",
        live: "https://saham-brown.vercel.app/en",
    },
    {
        title: "AceStar Tech Academy",
        description: "Industry-recognised training platform offering professional courses in AI, data science, and software engineering, claimable via HRD Corp.",
        tech: ["Next.js", "Tailwind CSS", "Course Management", "Deployment"],
        github: "#",
        live: "https://www.acestartechacademy.com/",
    },
    {
        title: "JomLocal",
        description: "AI-powered trip planning application designed to discover hidden local gems and authentic travel experiences in Perlis, Malaysia.",
        tech: ["AI Planner", "Next.js", "Maps API", "Tailwind CSS", "Mobile Web"],
        github: "#",
        live: "https://www.jomlocal.com/",
    },
    {
        title: "Ace Tech SI",
        description: "Enterprise systems integration platform delivering ERP systems, AI automation, and IoT hardware integrations across the Singapore–Malaysia corridor.",
        tech: ["ERP Systems", "AI Solutions", "IoT Automation", "Enterprise Cloud"],
        github: "#",
        live: "https://acetechsi.vercel.app/about",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <div className="group relative flex flex-col h-full rounded-3xl border border-white/10 hover:border-white/20 transition-all overflow-hidden">
            {/* Project Image */}
            {project.image ? (
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a]" />
                </div>
            ) : (
                <div className="h-2 bg-gradient-to-r from-indigo-500/40 via-purple-500/30 to-transparent" />
            )}

            {/* Card Content */}
            <div className="relative flex flex-col flex-1 bg-[#0a0a0a] p-7">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-1">
                    {/* Top row */}
                    <div className="flex justify-between items-start mb-5">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/10">
                            <span className="font-mono text-xs text-indigo-400">0{index + 1}</span>
                        </div>
                        <div className="flex gap-2">
                            {project.video && (
                                <a href={project.video} target="_blank" rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
                                    aria-label="Watch video" title="Watch Video">
                                    <Play size={18} />
                                </a>
                            )}
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-full transition-colors"
                                    aria-label="Live Demo" title="Live Demo">
                                    <ExternalLink size={18} />
                                </a>
                            )}
                            {project.linkedin && (
                                <a href={project.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-full transition-colors"
                                    aria-label="LinkedIn post">
                                    <Linkedin size={18} />
                                </a>
                            )}
                            {project.github !== "#" && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                    aria-label="GitHub">
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-white/10">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <Section id="projects" className="py-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl font-light">
                        A selection of intelligent systems, IoT platforms, and AI-powered applications.
                    </p>
                </div>
                <a href="https://github.com/Ahmeed-Gado" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all shrink-0">
                    <Github size={16} />
                    View all on GitHub
                </a>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    >
                        <ProjectCard project={project} index={index} />
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
