"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Newsletter from "./Newsletter";
import SearchComponent from "./SearchComponent";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../../context/DarkModeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const menuButtonRef = useRef(null);
  const circleRef = useRef(null);
  const pathname = usePathname();
  const { isDarkMode } = useDarkMode();

  const closeMenu = () => {
    setAnimationComplete(false);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500); 
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!circleRef.current || !menuButtonRef.current) return;

    if (isMenuOpen) {
      const buttonRect = menuButtonRef.current.getBoundingClientRect();
      const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

      const maxDistance = Math.sqrt(
        Math.max(
          Math.pow(buttonRect.left, 2) + Math.pow(buttonRect.top, 2),
          Math.pow(viewportWidth - buttonRect.right, 2) + Math.pow(buttonRect.top, 2),
          Math.pow(buttonRect.left, 2) + Math.pow(viewportHeight - buttonRect.bottom, 2),
          Math.pow(viewportWidth - buttonRect.right, 2) + Math.pow(viewportHeight - buttonRect.bottom, 2)
        )
      ) * 2.2;

      circleRef.current.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
      circleRef.current.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
      circleRef.current.style.width = '0';
      circleRef.current.style.height = '0';

      setTimeout(() => {
        circleRef.current.style.width = `${maxDistance}px`;
        circleRef.current.style.height = `${maxDistance}px`;

        setTimeout(() => {
          setAnimationComplete(true);
        }, 500);
      }, 10);
    } else {
      if (circleRef.current) {
        circleRef.current.style.width = '0';
        circleRef.current.style.height = '0';
      }
    }
  }, [isMenuOpen]);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className={`fixed w-full z-50 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-52 py-4 flex justify-between items-center ${
        isMenuOpen ? "text-white" : isDarkMode ? "text-white" : "text-black"
      } transition-colors duration-300`}>
        <button
          ref={menuButtonRef}
          onClick={() => isMenuOpen ? closeMenu() : setIsMenuOpen(true)}
          className="p-2 focus:outline-none relative z-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <X size={30} className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
          <Menu size={30} className={`transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
        </button>

        <Link href="/" className="absolute left-1/2 flex max-sm:flex-col max-sm:gap-0 items-center gap-4 text-center transform -translate-x-1/2 z-50">
          <h1 className="text-lg font-serif">MindScribe </h1>
          <h1 className="text-lg font-serif px-4 border-l-2 max-sm:border-l-0 max-sm:border-t-1">Thought Journal </h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <DarkModeToggle isMenuOpen={isMenuOpen}/>
          <SearchComponent />
        </div>
      </nav>

      <div 
        ref={circleRef}
        className={`fixed rounded-full bg-black/90 z-40 transition-all duration-500 ease-out`}
        style={{
          transformOrigin: 'center',
          transform: 'translate(-50%, -50%)'
        }}
      ></div>

      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          animationComplete ? 'opacity-100' : 'opacity-0'
        } ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="h-full flex flex-col justify-center items-center md:flex-row font-serif">
          <div className="md:w-1/2 flex items-center justify-center md:px-52 mb-10">
            <div className="flex flex-col text-3xl max-sm:text-2xl">
              <div className="space-y-8 max-sm:space-y-4">
                <Link 
                  href="/"
                  className={`flex items-center  group ${isActive('/') ? 'text-white' : 'text-neutral-400 hover:text-white transition-colors duration-300'}`}
                  onClick={closeMenu}
                >
                  {isActive('/') && <span className="inline-block w-8 h-px bg-white mr-4"></span>}
                  Home
                </Link>
                
                <Link 
                  href="/about"
                  className={`flex items-center group ${isActive('/about') ? 'text-white' : 'text-neutral-400 hover:text-white transition-colors duration-300'}`}
                  onClick={closeMenu}
                >
                  {isActive('/about') && <span className="inline-block w-8 h-px bg-white mr-4"></span>}
                  About me
                </Link>
                
                <Link 
                  href="/categories"
                  className={`flex items-center group ${isActive('/categories') ? 'text-white' : 'text-neutral-400 hover:text-white transition-colors duration-300'}`}
                  onClick={closeMenu}
                >
                  {isActive('/categories') && <span className="inline-block w-8 h-px bg-white mr-4"></span>}
                  Categories
                </Link>
                
                <Link 
                  href="/contact"
                  className={`flex items-center group ${isActive('/contact') ? 'text-white' : 'text-neutral-400 hover:text-white transition-colors duration-300'}`}
                  onClick={closeMenu}
                >
                  {isActive('/contact') && <span className="inline-block w-8 h-px bg-white mr-4"></span>}
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex px-4 items-center">
            <Newsletter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;