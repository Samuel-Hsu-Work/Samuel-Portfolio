import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            exit={{ x: "100%", transition: { duration: 1 } }}
            name='about' 
            className='current-page w-full h-screen bg-[#bd8049] overflow-y-auto'
        >
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 sm:text-center'>
                    <div className='pb-8'>
                        <p className='text-6xl font-bold text-center '>Samuel Hsu</p>
                    </div>

                    <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 text-2xl leading-relaxed '>
                        <p>
                            <code className="font-bold">function</code> 
                            <code className="px-2 py-1 rounded-md">introduce()</code> {'{'}
                        </p>
                        <p className="pl-6">
                            <code className="font-bold">const</code> title = 
                            <code className="px-2 py-1 rounded-md">
                                "Full Stack Web Developer"
                            </code>;
                        </p>
                        <p className="pl-6">
                            <code className="font-bold">const</code> certification = 
                            <code className="px-2 py-1 rounded-md">
                                "UT Austin Coding Boot Camp"
                            </code>;
                        </p>
                        <p className="pl-6">
                            <code className="font-bold">const</code> techStack = [
                            <code className="px-2 py-1 rounded-md">
                                MERN Stack(), React.js(), Node.js(), Express.js(), 
                                MongoDB(NoSQL), JavaScript(ES6+), CSS()
                            </code>
                            ];
                        </p>
                        <p className="pl-6">
                            <code className="font-bold">const</code> deploymentSkills = [
                            <code className="px-2 py-1 rounded-md">
                                "Git & GitHub", "Heroku", "Vercel"
                            </code>
                            ];
                        </p>
                        <p className="pl-6">
                            <code className="font-bold">return</code> 
                            <code className="px-2 py-1 rounded-md">
                                "I thrive on tackling challenges, leveraging problem-solving skills to debug, optimize, and architect scalable solutions."
                            </code>;
                        </p>
                        <p>{'}'}</p>

                        <p>
                            <code className="font-bold">introduce();</code>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
