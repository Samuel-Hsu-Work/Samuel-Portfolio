import { motion, useReducedMotion } from 'framer-motion';
import './About.css';

const fadeUp = (reduced) => ({
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: (i) => reduced
        ? { opacity: 1, transition: { duration: 0.01 } }
        : { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } }
});

const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
    { category: "Frontend", items: ["React", "React Native", "Next.js", "HTML", "CSS", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Express"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
    { category: "Monitoring", items: ["Sentry", "Better Stack"] },
];

const experience = [
    {
        role: "Mobile App Developer",
        company: "Wisent",
        period: "Oct 2025 - Present",
        type: "Early-Stage Startup",
        highlights: [
            "Built data translation layer decoupling frontend from backend schemas",
            "Integrated OpenAI & Gemini APIs with provider abstraction and auto-fallback",
        ],
    },
    {
        role: "Web Developer",
        company: "Tristyn Tech",
        period: "Mar 2025 - Aug 2025",
        type: "Contract",
        highlights: [
            "Developed features with React in Agile team, integrating REST APIs",
            "Implemented React Context for global state, reducing prop drilling",
            "Enhanced accessibility with WCAG-compliant tab navigation and screen-reader support",
        ],
    },
    {
        role: "QA Tester",
        company: "Tristyn Tech",
        period: "Jan 2025 - Mar 2025",
        type: "Contract",
        highlights: [
            "Designed QA tests that uncovered a session-isolation security defect before release",
        ],
    },
];

const projects = [
    {
        name: "Music Hub",
        desc: "Music community platform with AI-generated forum topics",
        stack: ["TypeScript", "React", "Next.js", "Python", "PostgreSQL", "OpenAI API"],
    },
    {
        name: "QA-Report App",
        desc: "Internal QA tool for screen recordings and bug reporting",
        stack: ["React", "Node.js", "Express", "MongoDB", "GCP"],
    },
];

const About = () => {
    const reduced = useReducedMotion();
    const variants = fadeUp(reduced);

    return (
        <motion.div
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: reduced ? 0.01 : 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: reduced ? 0.01 : 0.3, ease: "easeIn" } }}
            name='about'
            className='current-page w-full min-h-screen py-24 overflow-y-auto'
        >
            <div className='max-w-[900px] mx-auto px-6 md:px-8'>
                {/* Header */}
                <motion.div className='text-center mb-12' custom={0} variants={variants} initial="hidden" animate="visible">
                    <h1 tabIndex={-1} className='text-5xl md:text-6xl font-bold mb-2'>
                        <span className="gradient-heading">
                            Samuel Hsu
                        </span>
                    </h1>
                    <p className='about-subtitle text-lg'>Austin, TX</p>
                    <p className='about-tagline text-base mt-3'>
                        I build AI-powered systems and ship end-to-end features at early-stage startups.
                    </p>
                </motion.div>

                {/* Skills */}
                <motion.section className='mb-10' custom={1} variants={variants} initial="hidden" animate="visible">
                    <h2 className='about-section-title text-2xl font-bold mb-4'>Skills</h2>
                    <div className='about-card rounded-xl p-6'>
                        <div className='flex flex-wrap gap-y-4'>
                            {skills.map(({ category, items }) => (
                                <div key={category} className='w-full sm:w-1/2'>
                                    <p className='about-category-label text-sm font-semibold uppercase tracking-wider mb-2'>{category}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {items.map((item) => (
                                            <span key={item} className='about-tag px-3 py-1 rounded-full text-sm font-medium'>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Experience */}
                <motion.section className='mb-10' custom={2} variants={variants} initial="hidden" animate="visible">
                    <h2 className='about-section-title text-2xl font-bold mb-4'>Experience</h2>
                    <div className='flex flex-col gap-4'>
                        {experience.map((job) => (
                            <div key={job.role + job.company} className='about-card rounded-xl p-6'>
                                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1'>
                                    <h3 className='text-lg font-bold'>{job.role}</h3>
                                    <span className='about-period text-sm'>{job.period}</span>
                                </div>
                                <p className='about-company text-base font-medium mb-3'>{job.company} <span className='about-type'>· {job.type}</span></p>
                                <ul className='space-y-1.5'>
                                    {job.highlights.map((h, i) => (
                                        <li key={i} className='about-highlight text-sm flex gap-2'>
                                            <span className='about-bullet mt-1.5 flex-shrink-0'>▸</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Projects */}
                <motion.section className='mb-10' custom={3} variants={variants} initial="hidden" animate="visible">
                    <h2 className='about-section-title text-2xl font-bold mb-4'>Projects</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {projects.map((project) => (
                            <div key={project.name} className='about-card rounded-xl p-6'>
                                <h3 className='text-lg font-bold mb-1'>{project.name}</h3>
                                <p className='about-desc text-sm mb-3'>{project.desc}</p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {project.stack.map((tech) => (
                                        <span key={tech} className='about-stack-tag px-2 py-0.5 rounded text-xs font-mono'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Certification */}
                <motion.section className='mb-10' custom={4} variants={variants} initial="hidden" animate="visible">
                    <h2 className='about-section-title text-2xl font-bold mb-4'>Certification</h2>
                    <div className='about-card rounded-xl p-6'>
                        <h3 className='text-lg font-bold'>Full Stack Web Development Bootcamp</h3>
                        <p className='about-company text-base'>The University of Texas at Austin</p>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default About;
