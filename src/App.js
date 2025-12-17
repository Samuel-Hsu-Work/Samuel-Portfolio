import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoute.js';
import { ThemeContext } from './components/ThemeContext/ThemeContext.js';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <Router>
        <div className={`background-pattern ${isDarkMode ? 'dark' : 'light'}`}></div>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </>
  )
}

export default App;
