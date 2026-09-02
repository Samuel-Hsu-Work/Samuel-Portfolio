import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import './Navbar.css';
import DarkMode from '../DarkMode/DarkMode.js';
import ResumePDF from './Resume.pdf';
import { normalizePath } from '../../utils/normalizePath.js';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const location = useLocation();
    const dialogRef = useRef(null);
    const hamburgerRef = useRef(null);
    const closeButtonRef = useRef(null);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/Projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];

    const isActive = (to) => normalizePath(location.pathname.toLowerCase()) === normalizePath(to.toLowerCase());

    // Keep the native <dialog>'s open/closed state in sync with React state,
    // and listen for the ways it can close itself (Escape -> 'cancel' then
    // 'close') so `nav` doesn't get stuck true after that happens.
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        // Older browsers (pre-2022 Safari) don't support <dialog> methods —
        // fall back to the `open` attribute directly rather than crashing.
        // Checked via hasAttribute, not the `.open` IDL property: a browser
        // with no HTMLDialogElement support at all exposes <dialog> as
        // HTMLUnknownElement, which doesn't reflect the attribute onto a
        // `.open` property — reading `dialog.open` there is always
        // undefined even once the attribute is set, which would leave the
        // fallback's "close" branch permanently unreachable.
        const isOpen = dialog.hasAttribute('open');
        if (nav && !isOpen) {
            if (typeof dialog.showModal === 'function') {
                dialog.showModal();
            } else {
                dialog.setAttribute('open', '');
            }
            // Move focus in explicitly rather than relying on the `autofocus`
            // attribute (flagged by jsx-a11y/no-autofocus, since it's usually
            // misused on page load — here it's correct because it only fires
            // in response to the user's own click that opened this modal).
            closeButtonRef.current?.focus();
        } else if (!nav && isOpen) {
            if (typeof dialog.close === 'function') {
                dialog.close();
            } else {
                dialog.removeAttribute('open');
            }
        }

        const handleClose = () => {
            setNav(false);
            hamburgerRef.current?.focus();
        };
        dialog.addEventListener('close', handleClose);
        return () => dialog.removeEventListener('close', handleClose);
    }, [nav]);

    // Close the mobile menu on route change and if the viewport grows past
    // the desktop breakpoint while it's open.
    useEffect(() => {
        setNav(false);
    }, [location.pathname]);

    useEffect(() => {
        const desktopQuery = window.matchMedia('(min-width: 768px)');
        const handleChange = (e) => {
            if (e.matches) setNav(false);
        };
        // MediaQueryList.addEventListener is unsupported on Safari <14 —
        // still within this project's browserslist range — which only
        // exposes the older addListener/removeListener pair. Calling the
        // modern method there throws during mount and takes the whole app
        // down, so feature-detect instead of assuming it.
        if (typeof desktopQuery.addEventListener === 'function') {
            desktopQuery.addEventListener('change', handleChange);
            return () => desktopQuery.removeEventListener('change', handleChange);
        }
        desktopQuery.addListener(handleChange);
        return () => desktopQuery.removeListener(handleChange);
    }, []);

    return (
        <>
        <nav aria-label="Primary" className='navbar fixed w-full z-50 py-4 px-6 md:px-10'>
            <div className='max-w-[1200px] mx-auto flex items-center justify-center relative'>
                <ul className='nav-menu hidden md:flex items-center gap-1 text-base font-medium'>
                    {navLinks.map(({ to, label }) => (
                        <li key={to}>
                            <Link
                                to={to}
                                aria-current={isActive(to) ? 'page' : undefined}
                                className={`nav-link px-4 py-2 rounded-lg transition-all duration-300 ${
                                    isActive(to) ? 'nav-link-active' : ''
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Theme toggle + mobile hamburger, grouped so they don't overlap */}
                <div className='absolute right-0 flex items-center gap-3'>
                    <DarkMode />
                    <button
                        type='button'
                        ref={hamburgerRef}
                        onClick={() => setNav(!nav)}
                        aria-expanded={nav}
                        aria-controls='mobile-menu'
                        aria-label={nav ? 'Close navigation menu' : 'Open navigation menu'}
                        className='md:hidden z-50 nav-hamburger'
                    >
                        {!nav ? <FaBars size={22} aria-hidden="true" focusable="false" /> : <FaTimes size={22} aria-hidden="true" focusable="false" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu — native <dialog> so it's a real modal: focus is
                contained inside while open, Escape closes it, and its links
                are automatically out of the tab order/accessibility tree
                while closed (browsers hide non-open <dialog> content). */}
            <dialog ref={dialogRef} id='mobile-menu' aria-label='Mobile navigation' className='mobile-menu-dialog'>
                <button
                    type='button'
                    ref={closeButtonRef}
                    onClick={() => setNav(false)}
                    aria-label='Close navigation menu'
                    className='mobile-menu-close'
                >
                    <FaTimes size={26} aria-hidden="true" focusable="false" />
                </button>
                <ul>
                    {navLinks.map(({ to, label }) => (
                        <li key={to} className='py-4 sm:py-6 text-3xl sm:text-4xl'>
                            <Link
                                to={to}
                                onClick={() => setNav(false)}
                                aria-current={isActive(to) ? 'page' : undefined}
                                className={isActive(to) ? 'nav-link-active' : ''}
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
                        <a className='nav-social-icon' href={ResumePDF} target="_blank" rel="noopener noreferrer" aria-label="Resume">
                            <BsFillPersonLinesFill size={24} />
                        </a>
                    </li>
                </ul>
            </dialog>
        </nav>

        {/* Sliding social links - desktop */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-50'>
            <ul>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href="https://www.linkedin.com/in/samuel-hsu-b9a73b241/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href="https://github.com/Samuel-Hsu-Work">
                        GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='slide-link w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 rounded-r-full'>
                    <a className='flex justify-between items-center w-full text-gray-50 px-4' href={ResumePDF} target="_blank" rel="noopener noreferrer">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar
