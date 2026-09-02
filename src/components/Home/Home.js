import React, { useEffect }  from 'react'
import {motion, useMotionValue, useTransform, useReducedMotion} from 'framer-motion'
import { Link } from 'react-router-dom'
import './Home.css'
import Samuel from './MyHead.png'

const Home = () => {
  const reduced = useReducedMotion();

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
    // Users who prefer reduced motion never get the mouse-parallax effect —
    // the phrase transforms simply stay at their initial (0, 0) value.
    if (reduced) return;

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
  }, [mouseX, mouseY, reduced]);

  // Staggered entrance for the text lines — instant when reduced motion is
  // preferred, rather than sliding/fading in with a delay per line.
  const entrance = (delay) => reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0.01 } }
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.5 } };


    return (
    <motion.div
    initial={reduced ? { opacity: 1 } : { opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: reduced ? 0.01 : 0.5, ease: "easeOut" } }}
    exit={{ opacity: 0, transition: { duration: reduced ? 0.01 : 0.3, ease: "easeIn" } }}
    name='home'
    className='current-page relative w-full min-h-screen flex items-center bg-[center_top_9rem]'
    data-theme="light"
    >

    {/* Extra left padding from lg up (vs. a symmetric lg:px-12) clears
        Navbar's fixed sliding social rail, which starts appearing at the
        same lg breakpoint and rests with a 60px edge showing at x=0-60. */}
    <div className='home-container w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:pl-20 lg:pr-12 pt-16 lg:pt-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20'>
      {/* Text content */}
      <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
        <motion.p
          className="home-greeting text-base sm:text-lg md:text-xl font-medium mb-2 tracking-wide"
          {...entrance(0.2)}
        >
          Hi there, I'm
        </motion.p>

        <motion.h1
          tabIndex={-1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6"
          style={{ x: phrase1X, y: phrase1Y }}
          {...entrance(0.3)}
        >
          <span className="gradient-heading">
            Samuel Hsu
          </span>
        </motion.h1>

        <motion.p
          className="home-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6"
          style={{ x: phrase2X, y: phrase2Y }}
          {...entrance(0.4)}
        >
          A Full Stack Web Developer
        </motion.p>

        <motion.p
          className="home-tagline text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10"
          style={{ x: phrase3X, y: phrase3Y }}
          {...entrance(0.5)}
        >
          Turning Ideas into Interactive Experiences
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center lg:justify-start"
          {...entrance(0.6)}
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
        className="home-photo-card w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[320px] max-w-full flex-shrink-0"
        initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: reduced ? 0 : 0.3, duration: reduced ? 0.01 : 0.6, ease: "easeOut" }}
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
