import React from 'react'
import { BrowserRouter as Router, Switch, 
    Route, Navigate , Routes, useLocation} from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contacts/Contact.js";
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes (){
    const location = useLocation();
    return(
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;