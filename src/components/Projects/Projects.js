import React from "react";

import ProductCard from './SubComponents/card.js';
import MusicPage from "./MusicPage.png"
import PopQuiz from "./PopQuiz.jpg"
import Scheduler from "./Scheduler.jpg"
import PasswordGenerate from "./PasswordGenerate.jpg"
import {motion} from 'framer-motion'

function Projects() {
    return (
        <motion.div 
        initial={{width:0}} 
        animate={{width:"100%"}} 
        exit={{x:"100%", transition:{duration:1}}}
        name='Projects'
        className='current-page w-full min-h-screen py-24'>

          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
              <p className='text-6xl font-bold text-center'>Projects</p>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">


            <div className="hover:scale-105 transition-all duration-300 ease-out">
              <div className="relative group flex flex-col h-full">
                <div className="absolute bottom-full mb-4 left-0 right-0 bg-white p-4 rounded-lg shadow-lg opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                  <ProductCard
                    name="3muel Studio"
                    description="A website that helps you learn and discuss music theory with ease."
                  />
                </div>
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img src={MusicPage} className="w-full h-full object-cover" alt="3muel Studio" />
                </div>
              <div className="btn flex flex-wrap justify-center">
                <a href="https://github.com/sky19930112/MusicTheory" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/MusicTheory/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">Deployed Website</button>
                </a>
              </div>
              </div>
            </div>


            <div className="hover:scale-105 transition-all duration-300 ease-out">
            <div className="relative group flex flex-col h-full">
                <div className="absolute bottom-full mb-4 left-0 right-0 bg-white p-4 rounded-lg shadow-lg opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                  <ProductCard
                    name="Easy Poppy Quizzy"
                    description="simple pop quiz for coding."
                  />
                </div>
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img src={PopQuiz} className="w-full h-full object-cover" alt="Easy Poppy Quizzy" />
              </div>
              <div className="btn flex flex-wrap justify-center">
                <a href="https://github.com/sky19930112/popQuizzes" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/popQuizzes/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">Deployed Website</button>
                </a>
              </div>
              </div>
            </div>


            <div className="hover:scale-105 transition-all duration-300 ease-out">
            <div className="relative group flex flex-col h-full">
                <div className="absolute bottom-full mb-4 left-0 right-0 bg-white p-4 rounded-lg shadow-lg opacity-0 transform scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                  <ProductCard
                    name="Daily Schedule"
                    description="Use local storage for building daily schedules."
                  />
                </div>
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img src={Scheduler} className="w-full h-full object-cover" alt="Daily Schedule" />
              </div>
              <div className="btn flex flex-wrap justify-center">
                <a href="https://github.com/sky19930112/DailyScheduler" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">GitHub</button>
                </a>
                <a href="https://sky19930112.github.io/DailyScheduler/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg hover:scale-110 transition-all duration-300">Deployed Website</button>
                </a>
              </div>
              </div>
            </div>

            
          
        </div>
      </div>
    </motion.div>   
  )
}
  



export default Projects;