import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm mt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold text-white">Aman Yadav</h2>
                    <p className="text-sm text-white/50 mt-2">
                        Built with Next.js, Tailwind & Framer Motion.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.social.email}`} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
                </div>

                <p className="text-xs text-white/30 md:ml-auto">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
