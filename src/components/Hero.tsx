"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, FileText, Terminal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-12 overflow-hidden">

            {/* Background Grid - Subtle Engineering Vibe */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >


                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
                        Aman <br />
                        <span className="text-white/40">Yadav.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-lg font-light leading-relaxed">
                        Architecting high-performance <span className="text-white">backend systems</span> and blending them with <span className="text-white">Applied AI</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <a href="#projects">
                            <Button className="h-14 px-8 rounded-full text-lg bg-white text-black hover:bg-white/90 hover:scale-105 transition-all shadow-xl shadow-white/10">
                                Check my work
                            </Button>
                        </a>

                        {portfolioData.social.resume && (
                            <a href={portfolioData.social.resume} target="_blank" rel="noopener noreferrer">
                                <Button className="h-14 px-8 rounded-full text-lg bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all border border-white/10">
                                    <FileText className="mr-2 w-5 h-5" />
                                    Resume
                                </Button>
                            </a>
                        )}

                        <div className="flex gap-4 px-6 border-l border-white/10 ml-2">
                            <SocialLink href={portfolioData.social.github} icon={<Github size={20} />} />
                            <SocialLink href={portfolioData.social.linkedin} icon={<Linkedin size={20} />} />
                            <SocialLink href={portfolioData.social.twitter} icon={<Twitter size={20} />} />
                            {portfolioData.social.codeforces && (
                                <SocialLink href={portfolioData.social.codeforces} icon={<Terminal size={20} />} />
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Right: Abstract Visual / 'Cool' Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
                >
                    {/* Layered glowing orbs/gradients for a 'Cosmic' feel */}
                    <div className="absolute w-[300px] h-[300px] bg-blue-600/30 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute w-[200px] h-[200px] bg-purple-600/30 rounded-full blur-[80px] translate-x-20 translate-y-20" />

                    {/* Glass card floating - symbolizing 'System' */}
                    <div className="relative z-10 w-64 h-80 glass-card p-6 rotate-[-6deg] hover:rotate-0 transition-transform duration-500 border-white/20">
                        <div className="h-full flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-white/10 to-transparent border border-white/10" />
                                <div className="w-full h-2 bg-white/10 rounded-full" />
                                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                            </div>
                            <div className="font-mono text-xs text-white/40">
                                &gt; Initializing system... <br />
                                &gt; AI Modules: Active <br />
                                &gt; Latency: 4ms
                            </div>
                        </div>
                    </div>

                    {/* Second card */}
                    <div className="absolute z-0 w-64 h-80 glass-card bg-black/50 p-6 translate-x-12 translate-y-12 rotate-[6deg] border-white/10 opacity-60">
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
            {icon}
        </a>
    );
}
