"use client";

import { Section } from "../ui/Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="py-32">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Let's work together
                    </h2>
                    <p className="text-lg text-gray-400 font-light mb-12 max-w-md leading-relaxed">
                        Whether you need a rapid MVP, an AI integration, or an embedded systems architecture, I'm ready to build it.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10">
                                <MapPin size={20} className="text-indigo-400" />
                            </div>
                            <span className="font-medium">Kuala Lumpur, Malaysia</span>
                        </div>

                        <a href="mailto:gado21774@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-indigo-500/50 transition-colors">
                                <Mail size={20} className="text-indigo-400" />
                            </div>
                            <span className="font-medium">gado21774@gmail.com</span>
                        </a>

                        <a href="https://wa.me/601156786978" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                            <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:border-[#25D366]/50 transition-colors">
                                <Phone size={20} className="text-[#25D366]" />
                            </div>
                            <span className="font-medium">+60 11-5678 6978 (WhatsApp)</span>
                        </a>

                        <div className="flex gap-4 pt-6">
                            <a href="https://www.linkedin.com/in/ahmed-jado-88a932365/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                                <Linkedin size={24} className="text-white" />
                            </a>
                            <a href="https://github.com/Ahmeed-Gado" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all">
                                <Github size={24} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
