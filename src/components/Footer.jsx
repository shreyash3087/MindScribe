"use client"
import React from "react";
import Link from "next/link";
import InstagramSection from "./InstagramSection";
import { useDarkMode } from "../../context/DarkModeContext";

function Footer() {
  const currentDate = new Date();
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={isDarkMode ? "bg-black backdrop-blur-md text-white" : ""}>
      <InstagramSection />
      <div className="flex max-w-7xl mx-auto px-4 py-6 items-center justify-between w-full flex-col md:flex-row gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <div className={`font-serif text-xl ${isDarkMode ? "text-white" : ""}`}>
            MindScribe
          </div>
          <div className={`text-xs ${isDarkMode ? "text-gray-300" : "text-neutral-400"}`}>
            Copyright &copy; {currentDate.getFullYear()}. All rights Reserved
          </div>
        </div>
        <div className={`text-sm flex gap-4 sm:gap-6 ${
          isDarkMode ? "text-gray-300" : "text-neutral-400"
        } flex-wrap justify-center`}>
          <Link 
            href="/" 
            className={`${
              isDarkMode 
                ? "hover:text-white" 
                : "hover:text-neutral-600"
            } transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`${
              isDarkMode 
                ? "hover:text-white" 
                : "hover:text-neutral-600"
            } transition-colors`}
          >
            About Me
          </Link>
          <Link 
            href="/categories" 
            className={`${
              isDarkMode 
                ? "hover:text-white" 
                : "hover:text-neutral-600"
            } transition-colors`}
          >
            Categories
          </Link>
          <Link 
            href="/contact" 
            className={`${
              isDarkMode 
                ? "hover:text-white" 
                : "hover:text-neutral-600"
            } transition-colors`}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;