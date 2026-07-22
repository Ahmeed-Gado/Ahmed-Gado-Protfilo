"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "assistant", content: string }[]>([
        { role: "assistant", content: "Hi, I'm Ahmeed's AI Assistant. Ask me about his projects, skills, or experience." }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = { role: "user" as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // Send last 5 messages for context + new message
                    messages: [...messages.slice(-5).map(m => ({ role: m.role, content: m.content })), userMessage]
                }),
            });

            if (!response.ok) throw new Error("API response error");

            const data = await response.json();
            setMessages(prev => [...prev, data]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting to my brain right now. Please try again later!" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Button Container with Glow effect */}
            <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 origin-bottom-right
                ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}
            `}>
                {/* Outer glowing ring (Pulse animation) */}
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 animate-ping" style={{ animationDuration: '3s' }} />

                {/* Inner glowing shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-lg opacity-60" />

                {/* Main Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center text-white border border-white/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-300 group overflow-hidden"
                    aria-label="Open Chat"
                >
                    {/* Inner spark shine */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-t from-transparent via-white to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-700 ease-in-out" />

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                </button>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-6 right-6 w-[90vw] md:w-96 h-[500px] max-h-[85vh] bg-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right z-50 overflow-hidden
          ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}
            >
                {/* Header (Glassmorphism look) */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gray-900/90 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                AI
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white leading-tight">Ahmeed's Assistant</h3>
                            <p className="text-xs text-gray-400">AI Engineering Specialist</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0f1c] scroll-smooth custom-scrollbar">
                    {messages.map((msg, index) => {
                        // Simple URL matching logic for links
                        const renderContent = (text: string) => {
                            const urlRegex = /(https?:\/\/[^\s]+)/g;
                            const parts = text.split(urlRegex);
                            return parts.map((part, i) =>
                                part.match(urlRegex) ? (
                                    <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline break-all font-medium transition-colors">
                                        {part}
                                    </a>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                            );
                        };

                        return (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[85%] p-3.5 shadow-sm text-sm whitespace-pre-wrap leading-relaxed
                      ${msg.role === 'user'
                                            ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-sm'
                                            : 'bg-gray-800/80 text-gray-200 border border-gray-700/50 rounded-2xl rounded-tl-sm backdrop-blur-sm'
                                        }`}
                                >
                                    {renderContent(msg.content)}
                                </div>
                            </div>
                        );
                    })}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-800/80 border border-gray-700/50 rounded-2xl rounded-tl-sm p-4 flex gap-1.5 items-center w-fit">
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                                <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} className="h-2" />
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-gray-700/50 bg-gray-900">
                    <form
                        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                        className="flex items-center gap-2 relative"
                    >
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about projects, skills, or experience..."
                            className="flex-1 bg-gray-800/50 text-white placeholder-gray-500 border border-gray-700 rounded-full pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all hover:bg-gray-800"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            className="absolute right-1.5 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                        </button>
                    </form>
                    <div className="text-center mt-2">
                        <span className="text-[10px] text-gray-500">Powered by OpenAI & Next.js</span>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 20px;
        }
      `}} />
        </>
    );
}
