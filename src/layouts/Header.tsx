import React from "react";
import Navbar from "../components/Navbar";
import { PiCode, PiMoon } from "react-icons/pi";
import { getDarkValue, toggleDarkMode } from "../utils/themeSwitcher";

const Header: React.FC = () => {
  React.useEffect(() => getDarkValue, []);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm dark:bg-[#121212]">
      <div className="container flex items-center justify-between px-4 mx-auto h-14 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 dark:text-white">
          <PiCode size={26} />
          <h1 className="text-lg poppins-semibold">Faiz</h1>
        </div>
        <Navbar />
        <button
          onClick={toggleDarkMode}
          className="p-1 rounded-md hover:bg-black hover:text-white dark:text-[#969696] dark:hover:bg-[#252525] "
        >
          <PiMoon size={22} />
        </button>
      </div>
    </header>
  );
};

export default Header;
