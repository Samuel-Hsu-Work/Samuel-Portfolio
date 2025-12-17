import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
            name='about'
            className='current-page w-full min-h-screen py-24 overflow-y-auto'
        >
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='max-w-[1000px] w-full px-8'>
                    <div className='pb-10'>
                        <p className='text-5xl font-bold text-center'>Samuel Hsu</p>
                    </div>

                    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-4 text-lg leading-relaxed font-mono'>
                        <p>
                            <code className="text-purple-400 font-bold">class</code>{' '}
                            <code className="text-yellow-400">SoftwareEngineer</code> {'{'}
                        </p>

                        <p className="pl-6">
                            <code className="text-purple-400 font-bold">constructor</code>() {'{'}
                        </p>
                        <p className="pl-12">
                            <code className="text-blue-400">this</code>.title ={' '}
                            <code className="text-green-400">"Full-Stack Software Engineer"</code>;
                        </p>
                        <p className="pl-12">
                            <code className="text-blue-400">this</code>.focus ={' '}
                            <code className="text-green-400">"React, Next.js & AI-powered systems"</code>;
                        </p>
                        <p className="pl-12">
                            <code className="text-blue-400">this</code>.certification ={' '}
                            <code className="text-green-400">"UT Austin Full Stack Bootcamp"</code>;
                        </p>
                        <p className="pl-6">{'}'}</p>

                        <p className="pl-6 pt-4">
                            <code className="text-purple-400 font-bold">get</code>{' '}
                            <code className="text-yellow-400">skills</code>() {'{'}
                        </p>
                        <p className="pl-12">
                            <code className="text-purple-400 font-bold">return</code> {'{'}
                        </p>
                        <p className="pl-16">
                            languages: [<code className="text-green-400">"JavaScript", "TypeScript", "Python"</code>],
                        </p>
                        <p className="pl-16">
                            frontend: [<code className="text-green-400">"React", "Next.js", "React Native", "Tailwind"</code>],
                        </p>
                        <p className="pl-16">
                            backend: [<code className="text-green-400">"Node.js", "Express", "RESTful APIs"</code>],
                        </p>
                        <p className="pl-16">
                            databases: [<code className="text-green-400">"MongoDB", "MySQL"</code>],
                        </p>
                        <p className="pl-16">
                            cloud: [<code className="text-green-400">"GCP", "Firebase", "Docker"</code>],
                        </p>
                        <p className="pl-16">
                            observability: [<code className="text-green-400">"Sentry", "Better Stack"</code>]
                        </p>
                        <p className="pl-12">{'}'};</p>
                        <p className="pl-6">{'}'}</p>

                        <p className="pl-6 pt-4">
                            <code className="text-purple-400 font-bold">get</code>{' '}
                            <code className="text-yellow-400">experience</code>() {'{'}
                        </p>
                        <p className="pl-12">
                            <code className="text-purple-400 font-bold">return</code> [
                        </p>
                        <p className="pl-16">
                            {'{ '}role: <code className="text-green-400">"Mobile App Developer"</code>, company: <code className="text-green-400">"Wisent"</code> {'}'},
                        </p>
                        <p className="pl-16">
                            {'{ '}role: <code className="text-green-400">"Chrome Extension Developer"</code>, company: <code className="text-green-400">"Timio News"</code> {'}'},
                        </p>
                        <p className="pl-16">
                            {'{ '}role: <code className="text-green-400">"Web Developer"</code>, company: <code className="text-green-400">"Tristyn Tech"</code> {'}'}
                        </p>
                        <p className="pl-12">];</p>
                        <p className="pl-6">{'}'}</p>

                        <p className="pl-6 pt-4">
                            <code className="text-yellow-400">introduce</code>() {'{'}
                        </p>
                        <p className="pl-12">
                            <code className="text-purple-400 font-bold">return</code>{' '}
                            <code className="text-green-400">"I build AI-powered systems and ship end-to-end features at early-stage startups."</code>;
                        </p>
                        <p className="pl-6">{'}'}</p>

                        <p>{'}'}</p>

                        <p className="pt-4">
                            <code className="text-purple-400 font-bold">const</code> samuel ={' '}
                            <code className="text-purple-400 font-bold">new</code>{' '}
                            <code className="text-yellow-400">SoftwareEngineer</code>();
                        </p>
                        <p>
                            samuel.<code className="text-yellow-400">introduce</code>();
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
