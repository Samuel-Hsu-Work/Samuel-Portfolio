import React, { useEffect }  from 'react'
import {motion, useMotionValue, useTransform} from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import Samuel from './MyHead.png'

const Home = () => {

  // setting mouse and phrase motions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const phrase1X = useTransform(mouseX, (value) => value * 0.005);
  const phrase1Y = useTransform(mouseY, (value) => value * 0.005);

  const phrase2X = useTransform(mouseX, (value) => value * -0.008);
  const phrase2Y = useTransform(mouseY, (value) => value * -0.008);

  const phrase3X = useTransform(mouseX, (value) => value * 0.012);
  const phrase3Y = useTransform(mouseY, (value) => value * 0.012);

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
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }}
    exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }}
    name='home'
    className='current-page relative w-full h-screen bg-[center_top_9rem]'
    data-theme="light"
    >

    <div className='home-container max-w-[1200px] mx-auto px-8 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between h-full gap-10 md:gap-20'>
      {/* Text content */}
      <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <motion.p
          className="home-greeting text-lg md:text-xl font-medium mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-4 md:mb-6"
          style={{ x: phrase1X, y: phrase1Y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Samuel Hsu
          </span>
        </motion.h1>

        <motion.p
          className="home-subtitle text-xl md:text-3xl font-semibold mb-4 md:mb-6"
          style={{ x: phrase2X, y: phrase2Y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A Full Stack Web Developer
        </motion.p>

        <motion.p
          className="home-tagline text-base md:text-xl mb-8 md:mb-10"
          style={{ x: phrase3X, y: phrase3Y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Turning Ideas into Interactive Experiences
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link to="/Projects" className="home-cta-primary">
            View My Work
          </Link>
          <Link to="/contact" className="home-cta-secondary">
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* Photo card */}
      <motion.div
        className="home-photo-card w-[200px] md:w-[320px] flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      >
        <div className="home-status-badge">
          Open to Work
        </div>
        <img
          src={Samuel}
          alt="Samuel Hsu"
          className="home-photo"
        />
      </motion.div>
    </div>
    </motion.div>

  )
}

export default Home
