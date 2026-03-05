import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import './Navbar.css';
import DarkMode from '../DarkMode/DarkMode.js';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const location = useLocation();

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/Projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    return (
        <>
        <nav className='navbar fixed w-full z-50 py-4 px-6 md:px-10'>
            <div className='max-w-[1200px] mx-auto flex items-center justify-center relative'>
                <ul className='nav-menu hidden md:flex items-center gap-1 text-base font-medium'>
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                                    location.pathname === to ? 'nav-link-active' : ''
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Dark mode toggle - far right */}
                <div className='absolute right-0'>
                    <DarkMode />
                </div>

                {/* Mobile hamburger */}
                <div onClick={handleClick} className='md:hidden z-50 cursor-pointer nav-hamburger absolute right-0'>
                    {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
                </div>
            </div>

            {/* Mobile menu */}
            <ul className={`mobile-menu ${nav ? 'mobile-menu-open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <li key={to} className='py-6 text-4xl'>
                        <Link
                            onClick={handleClick}
                            to={to}
                            className={location.pathname === to ? 'nav-link-active' : ''}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
                <li className='flex gap-6 pt-8'>
                    <a className='nav-social-icon' href="https://www.linkedin.com/in/samuel-hsu-b9a73b241/" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a className='nav-social-icon' href="https://github.com/Samuel-Hsu-Work" aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                    <a className='nav-social-icon' href={require("./Resume.pdf")} aria-label="Resume">
                        <BsFillPersonLinesFill size={24} />
                    </a>
                </li>
            </ul>
        </nav>

        {/* Sliding social links - desktop */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
            <ul>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href="https://www.linkedin.com/in/samuel-hsu-b9a73b241/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href="https://github.com/Samuel-Hsu-Work">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href={require("./Resume.pdf")}>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar
