import React, { useEffect }  from 'react'
import {motion, useMotionValue, useTransform} from 'framer-motion'
import './Home.css'
import Samuel from './MyHead.jpg'

const Home = () => {

  // setting mouse and phrase motions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const phrase1X = useTransform(mouseX, (value) => value * 0.01);
  const phrase1Y = useTransform(mouseY, (value) => value * 0.01);

  const phrase2X = useTransform(phrase1X, (value) => -value * 5); 
  const phrase2Y = useTransform(phrase1Y, (value) => -value * 5);

  const phrase3X = useTransform(mouseX, (value) => value * 0.08);
  const phrase3Y = useTransform(mouseY, (value) => value * 0.08);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);


    return (
    <motion.div 
    initial={{width:0}} 
    animate={{width:"100%"}} 
    exit={{x:"100%", transition:{duration:1}}}
    name='home' 
    className='current-page relative  w-full h-screen bg-[center_top_9rem]'  
    data-theme="light"
    >
      
    <img
            src={Samuel}
            alt="Samuel Background"
            className="absolute top-1/4 right-1/4 w-1/4 opacity-50"
          />

      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>        
        <motion.h1 
        className="text-8xl font-bold mb-8 relative group cursor-pointer"
        style={{ x: phrase1X, y: phrase1Y }}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            Samuel Hsu
          </span>
          <span className="absolute inset-0 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </motion.h1>

        <motion.p 
        className="text-4xl mb-6 relative group cursor-pointer"
        style={{ x: phrase2X, y: phrase2Y }}
        >
          <span className="relative z-10">
            A Full Stack Web Developer
          </span>
        </motion.p>

        <motion.p 
        className="text-3xl relative group cursor-pointer overflow-hidden"
        style={{ x: phrase3X, y: phrase3Y }}
        >
          <span className="relative z-10">
            Turning Ideas into Interactive Experiences
          </span>
        </motion.p>
      </div>
    </motion.div>
 
  )
}

export default Home