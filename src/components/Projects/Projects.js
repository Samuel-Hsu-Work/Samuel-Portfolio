import { motion, useReducedMotion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import MusicPage from "./MusicPage.png";
import QAreport from "./QAreport.png";
import AICalendarAssistant from "./AICalendarAssistant.png";

const fadeUp = (reduced) => ({
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: (i) => reduced
        ? { opacity: 1, transition: { duration: 0.01 } }
        : { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } }
});

const projects = [
    {
        name: "Music Hub",
        description: "A music community platform with forum features. Leverages Next.js server and client components for SEO and dynamic UI, with a Python background worker automating daily AI-generated music-theory discussions.",
        image: MusicPage,
        imageAlt: "Music Hub community forum page showing AI-generated music-theory discussion threads",
        stack: ["TypeScript", "React", "Next.js", "Python", "PostgreSQL", "OpenAI API"],
        demo: "https://musician-community-platform.vercel.app/",
    },
    {
        name: "QAreport",
        description: "An internal QA reporting tool built to improve testing efficiency at Tristyn Tech. Allows testers to upload screen recordings and bug descriptions, helping developers diagnose issues that are difficult to reproduce.",
        image: QAreport,
        imageAlt: "QAreport tool interface for uploading screen recordings and bug descriptions",
        stack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Google Cloud Platform"],
        demo: "https://qa-report.vercel.app/",
    },
    {
        name: "AI Calendar Assistant",
        description: "An AI-powered calendar assistant that lets you schedule, move, and delete events through natural language chat. Features a visible agent pipeline for intent detection, validation, and CRUD execution against a live calendar view.",
        image: AICalendarAssistant,
        imageAlt: "AI Calendar Assistant chat interface alongside a live calendar view",
        stack: ["TypeScript", "React", "OpenAI API"],
        demo: "https://ai-scheduling-assistant-theta.vercel.app/",
    },
];

function Projects() {
    const reduced = useReducedMotion();
    const variants = fadeUp(reduced);

    return (
        <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: reduced ? 0.01 : 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: reduced ? 0.01 : 0.3, ease: "easeIn" } }}
            name='Projects'
            className='current-page w-full min-h-screen py-24'
        >
            <div className='max-w-[900px] mx-auto px-4 sm:px-6 md:px-8'>
                {/* Header */}
                <motion.div className='text-center mb-12' custom={0} variants={variants} initial="hidden" animate="visible">
                    <h1 tabIndex={-1} className='text-4xl sm:text-5xl md:text-6xl font-bold'>
                        <span className="gradient-heading">
                            Projects
                        </span>
                    </h1>
                </motion.div>

                {/* Project Cards */}
                <div className='flex flex-col gap-6'>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.name}
                            className='project-card rounded-xl overflow-hidden'
                            custom={index + 1}
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className='flex flex-col md:flex-row'>
                                {/* Image */}
                                <div className='project-image-wrapper md:w-2/5 flex-shrink-0 h-52 sm:h-64 md:h-auto bg-black/30'>
                                    <img
                                        src={project.image}
                                        alt={project.imageAlt}
                                        className='w-full h-full object-contain'
                                    />
                                </div>

                                {/* Content */}
                                <div className='p-4 sm:p-6 flex flex-col justify-between flex-1 min-w-0'>
                                    <div>
                                        <h2 className='text-xl font-bold mb-2'>{project.name}</h2>
                                        <p className='project-desc text-sm mb-4 leading-relaxed'>{project.description}</p>
                                        <div className='flex flex-wrap gap-1.5 mb-4'>
                                            {project.stack.map((tech) => (
                                                <span key={tech} className='project-tag px-2 py-0.5 rounded text-xs font-mono'>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className='project-btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'>
                                                <FaExternalLinkAlt size={14} aria-hidden="true" focusable="false" />
                                                <span aria-hidden="true">Live Demo</span>
                                                <span className="sr-only">{`Live Demo — ${project.name} (opens in a new tab)`}</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
