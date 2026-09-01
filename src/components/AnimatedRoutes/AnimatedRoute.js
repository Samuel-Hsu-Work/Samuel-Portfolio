import React, { useEffect } from 'react'
import { Route, Navigate, Routes, useLocation } from "react-router-dom";

import Home from "../Home/Home.js";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Contact from "../Contacts/Contact.js";
import {AnimatePresence} from 'framer-motion'
import { normalizePath } from '../../utils/normalizePath.js';

const ROUTE_TITLES = {
    '/': 'Home | Samuel Hsu',
    '/about': 'About | Samuel Hsu',
    '/projects': 'Projects | Samuel Hsu',
    '/contact': 'Contact | Samuel Hsu',
};

// AnimatePresence calls this once the *old* page's exit transition has
// actually finished and the new one is about to take its place — unlike a
// fixed rAF delay keyed off the pathname change, which fires immediately
// on navigation and (under normal, non-reduced motion) would still find
// the outgoing page's heading, not the incoming one, since mode="wait"
// keeps the old page mounted for the full ~300ms exit. It never fires on
// the very first render (nothing has exited yet), so first-load focus is
// naturally left alone.
function focusNewPageHeading() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const heading = document.querySelector('#main-content h1');
            if (heading) heading.focus();
        });
    });
}

function AnimatedRoutes (){
    const location = useLocation();

    useEffect(() => {
        document.title = ROUTE_TITLES[normalizePath(location.pathname.toLowerCase())] || 'Samuel Hsu';
    }, [location.pathname]);

    return(
        <main id="main-content" tabIndex={-1}>
            <AnimatePresence mode="wait" onExitComplete={focusNewPageHeading}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            </AnimatePresence>
        </main>
    )
}

export default AnimatedRoutes;