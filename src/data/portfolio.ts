import { Code, Database, Globe, Layers, Cpu, Terminal } from "lucide-react";

export const portfolioData = {
    about: {
        title: "My Journey",
        description: "I am a Computer Science undergraduate at Scaler School of Technology, Bangalore. My passion lies in building scalable backend systems and integrating Artificial Intelligence to solve real-world problems. I thrive in fast-paced environments where I can architect robust solutions and optimize performance.",
        story: [
            {
                year: "2023",
                title: "The Beginning",
                description: "Started my journey at Scaler School of Technology. Dove deep into Data Structures, Algorithms (Solved 800+ problems), and the foundations of Computer Science.",
            },
            {
                year: "2024",
                title: "Building & Exploring",
                description: "Ventured into Full Stack Development. Built CraveStream (a TikTok-style feed) and Sheetguard, learning the intricacies of system design, database optimization, and cloud deployment.",
            },
            {
                year: "2024 - Present",
                title: "Professional Engineering",
                description: "Joined Ticker360 as an SDE Intern. Architected financial analysis platforms, integrated AI chatbots, and optimized high-frequency data pipelines for production use.",
            }
        ],
        interests: ["Distributed Systems", "AI Agents", "High Performance Computing", "Open Source"],
    },
    skills: [
        { category: "Languages", items: ["Golang", "Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"] },
        { category: "Backend & Systems", items: ["Spring Boot", "Node.js", "Express", "FastAPI", "gRPC", "RabbitMQ", "Microservices"] },
        { category: "AI & Data", items: ["OpenAI API", "LangChain", "CrewAI", "Pandas", "Pinecone", "RAG"] },
        { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "DigitalOcean", "CI/CD", "Terraform", "Nginx"] },
        { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "NeonDB"] },
    ],
    experience: [
        {
            id: 1,
            role: "SDE Intern",
            company: "Ticker360",
            location: "Bengaluru",
            duration: "Nov 2024 - Feb 2025",
            description: "Architected Ticker360.io, a financial analysis platform. Built scalable APIs for real-time data, integrated GenAI chatbots for personalized insights, and optimized deployment on DigitalOcean for high availability.",
            technologies: ["Golang", "Next.js", "Python", "OpenAI API", "DigitalOcean"],
        },
    ],
    projects: [
        // {
        //     id: 1,
        //     title: "Ticker360",
        //     tagline: "Financial Analysis Platform",
        //     description: "Real-time financial data processing engine with AI-driven insights. Handles complex data visualization and provides instant market analysis.",
        //     techStack: ["Golang", "Next.js", "Python", "GenAI", "DigitalOcean"],
        //     live: "https://ticker360.io",
        //     featured: true,
        // },
        {
            id: 1,
            title: "CraveStream",
            tagline: "Vertical Video Feed",
            description: "A TikTok-style video discovery feed engineered for engagement. Features JWT-based secure auth, RBAC for creators/users, and optimized video streaming via ImageKit.",
            techStack: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "ImageKit"],
            github: "https://github.com/Amanyadav207/CraveStream-",
            live: "https://zomato-two-blond.vercel.app",
            featured: true,
        },
        {
            id: 2,
            title: "Sheetguard",
            tagline: "Schema-Aware ETL Pipeline",
            description: "A robust ETL engine that ingests Google Sheets data into PostgreSQL. Implements schema validation, deduplication, and dead-letter queues (DLQ) for fault-tolerant data pipelines.",
            techStack: ["Python", "PostgreSQL", "Google Sheets API", "Pandas", "Docker"],
            github: "https://github.com/Amanyadav207/sheetguard",
            featured: true,
        },
        {
            id: 3,
            title: "Portfolio V3",
            tagline: "System Architecture Identity",
            description: "My personal developer identity site featuring a custom 'Midnight Aurora' theme, scrollytelling narratives, and Next.js 15 performance optimizations.",
            techStack: ["Next.js 15", "Tailwind v4", "Framer Motion", "TypeScript"],
            github: "https://github.com/Amanyadav207/portfolio.",
            featured: false,
        },
        {
            id: 4,
            title: "Conflux",
            tagline: "Real-Time Collaborative Code Editor",
            description: "A real-time collaborative code editor built for low-latency multi-user editing. Implemented CRDT-based synchronization (Yjs) and WebSockets for conflict-free concurrent edits.",
            techStack: ["Node.js", "WebSocket", "React", "Yjs", "Monaco Editor"],
            featured: true,
        },
    ],
    social: {
        github: "https://github.com/Amanyadav207",
        linkedin: "https://www.linkedin.com/in/amanYadav207/",
        twitter: "https://x.com/AmanYadav207",
        email: "amanyadav130904@gmail.com",
        resume: "https://drive.google.com/file/d/19H_gZDGwQ4q9adZqHycr1x39hKmxLjYF/view?usp=sharing",
        codeforces: "https://codeforces.com/profile/amanyadav130904",
    }
};

