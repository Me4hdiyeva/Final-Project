
import React, { useEffect, useState } from 'react'

const Mode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);


    return (
        <>

            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️ " : "🌙 "}
            </button>

        </>
    )
}

export default Mode
