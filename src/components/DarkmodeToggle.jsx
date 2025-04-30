import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

const DarkModeToggle = ({isMenuOpen}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full transition-colors duration-300 focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun size={20} className="text-white hover:text-yellow-300 transition-colors" />
      ) : (
        <Moon size={20} className={`${isMenuOpen?"text-white":"text-black"} hover:text-blue-900 transition-colors`} />
      )}
    </button>
  );
};

export default DarkModeToggle;