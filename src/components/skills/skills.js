import React from 'react';
import {motion} from 'framer-motion'


const Skills = () => {
  
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
        exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
        name='skills'
        className='current-page w-full md:h-screen sm:text-center'>

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-6xl font-bold text-center'>Skills</p>
                </div>
  
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-2xl'>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>TypeScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>React</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>Next.js</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>Node.js</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>MongoDB</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>Tailwind</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-105 transition-all duration-300 ease-out'>
                        <p className='my-4 text-2xl sm:text-3xl h-12'>GCP</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills