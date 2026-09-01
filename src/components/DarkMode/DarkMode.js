import React, { useContext } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { ThemeContext } from "../ThemeContext/ThemeContext.js";

const DarkMode = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='dark_mode'>
          <input
            className='dark_mode_input'
            type='checkbox'
            role='switch'
            id='darkmode-toggle'
            onChange={toggleTheme}
            checked={isDarkMode}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          />
          <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            <Sun aria-hidden="true" focusable="false" />
            <Moon aria-hidden="true" focusable="false" />
          </label>
        </div>
      );
    };

export default DarkMode;
