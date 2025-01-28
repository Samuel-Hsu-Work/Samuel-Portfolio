import React, { useContext, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoute.js';
import { ThemeContext } from './components/ThemeContext/ThemeContext.js';
import theme from './assets/theme.mkv';
import theme2 from './assets/theme2.mkv';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Router>
      <div className="background-container">
        <video
          className="background-video absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={isDarkMode ? theme2 : theme} 
          autoPlay
          muted
          style={{ pointerEvents: "none" }}
        />
      </div>
          <Navbar />
          <AnimatedRoutes />
      </Router>
    </>
  )
}

export default App;
