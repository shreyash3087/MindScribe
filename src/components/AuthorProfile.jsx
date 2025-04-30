import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../../context/DarkModeContext";

const AuthorProfile = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${
        isDarkMode
          ? "border-2 border-white/20 bg-black/20 backdrop-blur-md shadow-inner text-white"
          : "border-2 border-neutral-800"
      } relative w-72 max-sm:w-full p-6 my-12`}
    >
      <div className="flex flex-col items-center mb-4">
        <div
          className={`${
            isDarkMode ? "bg-gray-800" : "bg-gray-200"
          } absolute top-0 -translate-y-1/2 rounded-full overflow-hidden w-28 h-28 flex items-center justify-center mb-4`}
        >
          <img src="/Shreyash.png" />
        </div>

        <h3 className="text-2xl font-serif mt-14">Shreyash Srivastava</h3>
      </div>

      <p
        className={`${
          isDarkMode ? "text-gray-300" : "text-neutral-500"
        } text-center text-sm mb-6`}
      >
        For as long as I can remember I&apos;ve been obsessed with the idea of
        travel. I was always that person who was forever daydreaming of foreign
        lands and unfamiliar cultures; coming up with travel itineraries that
        would challenge my perceptions and help me gain a deeper understanding
        of the world.
      </p>

      <div>
        <div className="text-center font-medium mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Follow me
          </a>
        </div>
        <div className="flex absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 justify-center space-x-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black hover:bg-neutral-800"
            } w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center transition-colors`}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className={`${
                isDarkMode ? "text-black" : "text-white"
              } text-lg sm:text-xl`}
            />
          </a>

          <a
            href="https://www.instagram.com/x3_shreyash_x3"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black hover:bg-neutral-800"
            } w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center transition-colors`}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className={`${
                isDarkMode ? "text-black" : "text-white"
              } text-lg sm:text-xl`}
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black hover:bg-neutral-800"
            } w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center transition-colors`}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className={`${
                isDarkMode ? "text-black" : "text-white"
              } text-lg sm:text-xl`}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash3087"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black hover:bg-neutral-800"
            } w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center transition-colors`}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={`${
                isDarkMode ? "text-black" : "text-white"
              } text-lg sm:text-xl`}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
