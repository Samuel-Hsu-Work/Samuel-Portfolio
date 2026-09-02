import { motion, useReducedMotion } from 'framer-motion';
import './About.css';

const fadeUp = (reduced) => ({
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: (i) => reduced
        ? { opacity: 1, transition: { duration: 0.01 } }
        : { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" } }
});

const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java"] },
    { category: "Frontend", items: ["React", "React Native", "Next.js", "Angular", "HTML", "CSS", "Tailwind", "Bootstrap"] },
    { category: "Backend", items: ["Node.js", "Express", "Spring", "RESTful API", "FastAPI"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"] },
    { category: "Monitoring", items: ["Sentry", "Better Stack"] },
    { category: "Others", items: ["Git", "Agile", "AWS"] },
    { category: "Interest", items: ["Piano", "Guitar", "Woodworking", "Cardistry"] },
];

const education = [
    { school: "Texas State University", degree: "Bachelor of Music in Jazz Studies" },
];

const experience = [
    {
        role: "Software Engineer",
        company: "Wisent",
        period: "Oct 2025 - Present",
        type: "Early-Stage Startup",
        highlights: [
            "Developed AI-powered chat and agent capabilities across frontend and backend services by integrating 3+ LLM providers (OpenAI, Google Gemini, OpenRouter) with model routing, fallback handling, evaluation workflows, and structured prompt orchestration",
            "Built a frontend data translation layer mapping backend API responses to stable UI models, minimizing frontend changes when backend schemas evolved",
            "Replaced brittle text-pattern matching of LLM responses with structured intent tags, enabling deterministic application logic despite output drift across models and providers",
            "Designed a UTC-based timestamp strategy with timezone-aware conversion to resolve cross-timezone reliability risks",
            "Designed and built a QA framework across mobile, backend, and AI services, defining 35+ risk-based testing capabilities and 200+ deterministic invariants that uncovered 11 confirmed production defects",
        ],
    },
    {
        role: "Web Developer",
        company: "Tristyn Tech",
        period: "Mar 2025 - Aug 2025",
        type: "Contract",
        highlights: [
            "Developed end-to-end full-stack features from PRDs and UI designs using React, JavaScript, CSS, and Firebase",
            "Implemented React Context to manage shared state across 3+ levels of nested dashboard components and modals, reducing prop drilling",
            "Improved accessibility by implementing keyboard navigation and screen-reader support in alignment with WCAG guidelines",
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
            <div className='max-w-[900px] mx-auto px-4 sm:px-6 md:px-8'>
                {/* Header */}
                <motion.div className='text-center mb-12' custom={0} variants={variants} initial="hidden" animate="visible">
                    <h1 tabIndex={-1} className='text-4xl sm:text-5xl md:text-6xl font-bold mb-2'>
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
                    <div className='about-card rounded-xl p-4 sm:p-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4'>
                            {skills.map(({ category, items }) => (
                                <div key={category}>
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
                            <div key={job.role + job.company} className='about-card rounded-xl p-4 sm:p-6'>
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
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {projects.map((project) => (
                            <div key={project.name} className='about-card rounded-xl p-4 sm:p-6'>
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
                    <div className='about-card rounded-xl p-4 sm:p-6'>
                        <h3 className='text-lg font-bold'>Full Stack Web Development Bootcamp</h3>
                        <p className='about-company text-base'>The University of Texas at Austin — Center for Professional Education</p>
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section className='mb-10' custom={5} variants={variants} initial="hidden" animate="visible">
                    <h2 className='about-section-title text-2xl font-bold mb-4'>Education</h2>
                    <div className='flex flex-col gap-4'>
                        {education.map((edu) => (
                            <div key={edu.school} className='about-card rounded-xl p-4 sm:p-6'>
                                <h3 className='text-lg font-bold'>{edu.school}</h3>
                                <p className='about-company text-base'>{edu.degree}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default About;
