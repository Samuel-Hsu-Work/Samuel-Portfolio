import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import MusicPage from "./MusicPage.png";
import PopQuiz from "./PopQuiz.jpg";
import Scheduler from "./Scheduler.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
};

const projects = [
    {
        name: "Music Hub",
        description: "A music community platform with forum features. Leverages Next.js server and client components for SEO and dynamic UI, with a Python background worker automating daily AI-generated music-theory discussions.",
        image: MusicPage,
        stack: ["TypeScript", "React", "Next.js", "Python", "PostgreSQL", "OpenAI API"],
        github: "https://github.com/sky19930112/MusicTheory",
        demo: "https://sky19930112.github.io/MusicTheory/",
    },
    {
        name: "Easy Poppy Quizzy",
        description: "A simple and interactive pop quiz app for coding fundamentals. Test your knowledge with timed questions and instant feedback.",
        image: PopQuiz,
        stack: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/sky19930112/popQuizzes",
        demo: "https://sky19930112.github.io/popQuizzes/",
    },
    {
        name: "Daily Scheduler",
        description: "A day planner that uses local storage to persist your schedule across sessions. Organize your workday hour by hour.",
        image: Scheduler,
        stack: ["JavaScript", "HTML", "CSS", "LocalStorage"],
        github: "https://github.com/sky19930112/DailyScheduler",
        demo: "https://sky19930112.github.io/DailyScheduler/",
    },
];

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            name='Projects'
            className='current-page w-full min-h-screen py-24'
        >
            <div className='max-w-[900px] mx-auto px-6 md:px-8'>
                {/* Header */}
                <motion.div className='text-center mb-12' custom={0} variants={fadeUp} initial="hidden" animate="visible">
                    <h1 className='text-5xl md:text-6xl font-bold'>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Projects
                        </span>
                    </h1>
                </motion.div>

                {/* Project Cards */}
                <div className='flex flex-col gap-6'>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            className='project-card rounded-xl overflow-hidden'
                            custom={index + 1}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className='flex flex-col md:flex-row'>
                                {/* Image */}
                                <div className='project-image-wrapper md:w-2/5 flex-shrink-0'>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className='w-full h-48 md:h-full object-cover'
                                    />
                                </div>

                                {/* Content */}
                                <div className='p-6 flex flex-col justify-between flex-1'>
                                    <div>
                                        <h3 className='text-xl font-bold mb-2'>{project.name}</h3>
                                        <p className='project-desc text-sm mb-4 leading-relaxed'>{project.description}</p>
                                        <div className='flex flex-wrap gap-1.5 mb-4'>
                                            {project.stack.map((tech) => (
                                                <span key={tech} className='project-tag px-2 py-0.5 rounded text-xs font-mono'>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className='project-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'>
                                            <FaGithub size={16} /> Code
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className='project-btn-primary flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300'>
                                                <FaExternalLinkAlt size={14} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
