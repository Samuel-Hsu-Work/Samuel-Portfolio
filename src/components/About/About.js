import React from 'react'
import {motion} from 'framer-motion'


const About = () => {
    return (
        <motion.div 
        initial={{width:0}} 
        animate={{width:"100%"}} 
        exit={{x:"100%", transition:{duration:1}}}
        name='about' 
        className='current-page w-full h-screen bg-[#bd8049] overflow-y-auto'>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8 sm:text-center'>
                <div className='pb-8'>
                    <p className='text-6xl font-bold text-center'>Samuel Hsu</p>
                </div>

                <div className='max-w-[1000px] w-full grid grid-cols-1 gap-8 text-3xl'>
                    <p>A full Stack Web Developer with a certificate from The Coding Boot Camp at UT Austin (Center for Professional Education).</p>

                    <p><br/>Proficient in a range of technologies including the MERN stack, React JS, Node.js, Express.js, NoSQL, React.js, JavaScript, CSS, and HTML. 
                        <br/>Skilled in deployment using git bash to GitHub and Heroku. </p>
                    <p><br/>I thrive on tackling challenges, employing problem-solving skills to identify issues and craft effective solutions to meet objectives.</p>
                </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About