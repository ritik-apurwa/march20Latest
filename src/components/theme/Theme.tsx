import { useState, useEffect } from "react";
import { HiSun } from "react-icons/hi";
import { LuMoon } from "react-icons/lu";


function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString()); // Convert boolean to string
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="main-div">
      <button className="main-btn" onClick={toggleDarkMode}>
        {darkMode ? <HiSun size={24} className="" /> : <LuMoon size={24} />}
      </button>
    </div>
  );
}

export default DarkModeToggle;