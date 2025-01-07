import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() =>{
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev => !prev));
    }

    return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;