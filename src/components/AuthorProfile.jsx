import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AuthorProfile = () => {
  return (
    <div className="border-2 border-neutral-800 relative w-72 max-sm:w-full p-6 my-12">
      <div className="flex flex-col items-center mb-4">
        <div className="bg-gray-200 absolute top-0 -translate-y-1/2 rounded-full w-28 h-28 flex items-center justify-center mb-4">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-2xl font-serif mt-14">Shreyash Srivastava</h3>
      </div>

      <p className="text-neutral-500 text-center text-sm mb-6">
        For as long as I can remember I&apos;ve been obsessed with the idea of
        travel. I was always that person who was forever daydreaming of foreign
        lands and unfamiliar cultures; coming up with travel itineraries that
        would challenge my perceptions and help me gain a deeper understanding
        of the world.
      </p>

      <div>
        <p className="text-center font-medium mb-4">Follow me</p>
        <div className="flex absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 justify-center space-x-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-lg sm:text-xl"
            />
          </a>

          <a
            href="https://www.instagram.com/x3_shreyash_x3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-lg sm:text-xl"
            />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-white text-lg sm:text-xl"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shreyash3087"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black w-8 h-8 p-2 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-lg sm:text-xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
