"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
                        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                            I'm currently available for freelance projects and full-time roles.
                            If you're looking for a developer to help bring your ideas to life, let's connect.
                        </p>

                        <a href="mailto:hello@example.com">
                            <Button size="lg" className="text-lg px-10 py-6">
                                <Mail className="mr-3 w-5 h-5" />
                                Say Hello
                            </Button>
                        </a>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-500" />
                </motion.div>
            </div>
        </section>
    );
}
