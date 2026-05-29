import { Section } from "../ui/Section";
import Image from "next/image";

const skills = [
    { icon: <Image src="/icon_iot.png" alt="IoT & Embedded" width={56} height={56} className="rounded-xl" />, title: "IoT & Embedded", desc: "ESP32, Arduino, Sensors, WiFi Connectivity" },
    { icon: <Image src="/icon_fullstack.png" alt="Full-Stack Dev" width={56} height={56} className="rounded-xl" />, title: "Full-Stack Dev", desc: "Next.js, FastAPI, Python, JavaScript/TypeScript" },
    { icon: <Image src="/icon_prototyping.png" alt="Rapid Prototyping" width={56} height={56} className="rounded-xl" />, title: "Rapid Prototyping", desc: "MVP focus, AI-assisted coding, fast iteration" },
    { icon: <Image src="/icon_ai_cloud.png" alt="AI & Cloud" width={56} height={56} className="rounded-xl" />, title: "AI & Cloud", desc: "LLM Workflows, Computer Vision, Firebase" },
];

export function About() {
    return (
        <Section id="about" className="py-32 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">

                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
                        About Me
                    </h2>

                    {/* Education Card */}
                    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
                        <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <Image
                                src="/unisiraj.jfif"
                                alt="UniSiraj"
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div>
                            <p className="text-white font-medium">Final Year IoT Student</p>
                            <p className="text-gray-400 text-sm mt-0.5">Tuanku Syed Sirajuddin International Islamic University (UniSiraj)</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-lg text-gray-400 leading-relaxed font-light">
                        <p>
                            I&apos;m a final year IoT student with a passion for building intelligent systems that bridge hardware and software. I specialize in rapid MVP development — from embedded microcontrollers to full-stack AI-powered web applications.
                        </p>
                        <p>
                            My core approach is simple: <strong className="text-gray-200 font-medium">leverage AI to move fast, apply engineering principles to make it solid, and ship products that actually work.</strong>
                        </p>
                    </div>

                    <div className="flex gap-3 flex-wrap pt-2">
                        <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400">🌍 English</span>
                        <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400">🌍 Arabic</span>
                        <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400">📍 Kuala Lumpur, Malaysia</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                            <div className="mb-4 p-3 rounded-xl bg-black/50 w-fit group-hover:scale-110 transition-transform">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">{skill.title}</h3>
                            <p className="text-sm text-gray-500">{skill.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </Section>
    );
}
