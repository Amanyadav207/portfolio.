"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";

export default function Projects() {
    const featuredProjects = portfolioData.projects.filter(p => p.featured);
    const otherProjects = portfolioData.projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected <span className="text-gradient">Works</span></h2>
                </motion.div>

                {/* Featured Projects - Large Cards */}
                <div className="space-y-32">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                        >
                            {/* Project "Image" / Visual Representation */}
                            <div className="w-full lg:w-3/5 aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group">
                                {/* Fallback abstract gradient if no image */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10 group-hover:scale-105 transition-transform duration-700" />

                                {/* Overlay details on hover or always visible? Let's keep it clean. */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 text-9xl font-bold select-none opacity-50">{idx + 1}</span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5">
                                <span className="text-primary font-mono text-sm mb-4 block">{project.tagline}</span>
                                <h3 className="text-4xl font-bold text-white mb-6">{project.title}</h3>
                                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/70 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <Button className="group">
                                                Visit Site <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline">
                                                Source Code <Github className="ml-2 w-4 h-4" />
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects - Grid */}
                {otherProjects.length > 0 && (
                    <div className="mt-32">
                        <h3 className="text-2xl font-bold text-white mb-12 border-b border-white/10 pb-4">Other Notable Projects</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {otherProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    whileHover={{ y: -5 }}
                                    className="glass-card p-8 hover:bg-white/10 transition-all"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                                        <div className="flex gap-3">
                                            {project.github && <a href={project.github} className="text-white/40 hover:text-white"><Github className="w-5 h-5" /></a>}
                                        </div>
                                    </div>
                                    <p className="text-white/60 mb-6 text-sm leading-relaxed">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-xs text-white/50">{tech}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
