import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import './Navbar.css';
import DarkMode from '../DarkMode/DarkMode.js';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='button-container fixed w-full flex justify-between items-center py-4'>
            <div className='items-center'>
                <DarkMode />
            </div>
            
            <ul className='nav-menu hidden md:flex font-medium transition-all ease-in-out space-x-6 absolute left-1/2 -translate-x-1/2 text-3xl'>
                <li className='nav-menu-item transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-full hover:scale-110'>
                    <Link to='/' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='nav-menu-item transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-full hover:scale-110'>
                    <Link to='/about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='nav-menu-item transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-full hover:scale-110'>
                    <Link to='/skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='nav-menu-item transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-full hover:scale-110'>
                    <Link to='/Projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='nav-menu-item transition ease-in-out delay-150 hover:-translate-y-1 duration-300 rounded-full hover:scale-110'>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>


            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            <ul className={!nav ? 'hidden' : 'mobile-menu absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                <li className='py-7 text-5xl'>
                    <Link onClick={handleClick} to='/' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/Projects' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='py-7 text-5xl'>
                    {' '}
                    <Link onClick={handleClick} to='/contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>




            {/* links */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://www.linkedin.com/in/samuel-hsu-b9a73b241/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href="https://github.com/Samuel-Hsu-Work">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 rounded-full'>
                        <a className='flex justify-between items-center w-full text-gray-50' href={require("./Resume.pdf")}>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar