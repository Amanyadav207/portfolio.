"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
                </motion.div>

                <div className="space-y-12">
                    {portfolioData.experience.map((job, idx) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Hidden on Mobile for cleaner look, or customized) */}
                            <div className="hidden md:block absolute left-[-29px] top-0 bottom-0 w-[1px] bg-white/10">
                                <div className="absolute top-2 -left-[5px] w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                            </div>

                            <div className="md:grid md:grid-cols-[1fr_200px] gap-8 glass-card p-8 hover:bg-white/5 transition-colors">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                                    <div className="text-primary font-medium mb-4">{job.company}</div>
                                    <p className="text-white/60 leading-relaxed mb-4">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map(tech => (
                                            <span key={tech} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80 border border-white/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 md:text-right">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-sm text-white/50 whitespace-nowrap">
                                        {job.duration}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
