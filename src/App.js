import React, { useContext } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoute.js';
import { ThemeContext } from './components/ThemeContext/ThemeContext.js';

// Separated from the Router so tests can mount it inside their own
// MemoryRouter instead of App's hardcoded BrowserRouter.
export function AppShell() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`background-pattern ${isDarkMode ? 'dark' : 'light'}`} aria-hidden="true"></div>
      <header>
        <Navbar />
      </header>
      <AnimatedRoutes />
    </>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppShell />
    </Router>
  )
}

export default App;
