"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="about" ref={containerRef} className="relative bg-background">
            {/* 
        This is a "Scrollytelling" layout.
        The left side (Heading/Context) stays sticky while the right side (Events) scrolls.
      */}
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 md:gap-24 relative">

                {/* Sticky Sidebar */}
                <div className="md:w-1/3 md:h-screen md:sticky md:top-24 flex flex-col justify-start pb-24 h-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tighter">
                            My <br /> <span className="text-gradient">Journey.</span>
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            {portfolioData.about.description}
                        </p>
                    </motion.div>

                    {/* Progress Bar (Visible only on Desktop) */}
                    <div className="hidden md:block w-1 h-64 bg-white/5 rounded-full relative overflow-hidden mt-8">
                        <motion.div
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) as any }}
                            className="absolute top-0 left-0 w-full bg-primary rounded-full box-shadow-[0_0_20px_var(--primary)]"
                        />
                    </div>
                </div>

                {/* Scrollable Timeline Content */}
                <div className="md:w-2/3 flex flex-col gap-24 pb-24">
                    {portfolioData.about.story.map((item, idx) => (
                        <TimelineItem key={idx} item={item} index={idx} />
                    ))}

                    {/* Interests Block at the end of story */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 mt-12 border-l-4 border-l-primary"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Current Focus</h3>
                        <div className="flex flex-wrap gap-3">
                            {portfolioData.about.interests.map((interest) => (
                                <span key={interest} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white/80 transition-all">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ item, index }: { item: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12 border-l border-white/10"
        >
            {/* Timeline Dot */}
            <span className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />

            <span className="text-sm font-mono text-primary/80 mb-2 block">{item.year}</span>
            <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
                {item.description}
            </p>
        </motion.div>
    );
}
