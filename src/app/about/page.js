"use client";
import Image from "next/image";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../../../context/DarkModeContext";

function AboutsPage() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`w-full transition-all duration-500 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="h-screen w-full relative">
        <Image
          src="/ProfileBanner.jpg"
          alt="ProfileBanner"
          fill
          className={`object-cover transition-all duration-700 ${
            isDarkMode ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>

      <div
        className={`mx-auto transition-all duration-500 max-w-5xl lg:-top-52 md:-top-40 sm:-top-32 -top-60 max-sm:mx-4 z-20 relative ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } px-4 sm:px-6 lg:px-8`}
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="pt-8 sm:pt-12 md:pt-16 pb-4 text-center">
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              My name is
              <br />
              Shreyash Srivastava
            </h1>

            <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode
                    ? "bg-white hover:bg-neutral-300"
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
                    ? "bg-white hover:bg-neutral-300"
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
                    ? "bg-white hover:bg-neutral-300"
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
                    ? "bg-white hover:bg-neutral-300"
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

            <div
              className={`border-t border-b ${
                isDarkMode ? "border-white" : "border-gray-300"
              } py-4 sm:py-6 mb-6 sm:mb-8`}
            >
              <p className="text-xl max-w-lg mx-auto w-full sm:text-2xl italic font-light">
                Some beautiful paths can&apos;t be discovered without getting
                lost.
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-sm text-left mb-6 sm:mb-8">
                For as long as I can remember I&apos;ve been obsessed with the
                idea of travel. I was always that person who was forever
                daydreaming of foreign lands and unfamiliar cultures; coming up
                with travel itineraries that would challenge my perceptions and
                help me gain a deeper understanding of the world.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 w-full mx-auto max-w-3xl">
          <div
            className={`w-full sm:w-1/2 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            } h-64 sm:h-80 md:h-96 flex items-center justify-center`}
          >
            <img
              src="/About_01.jpeg"
              alt="Img"
              className="object-cover w-full h-full"
            />
          </div>

          <div
            className={`w-full sm:w-1/2 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            } h-64 sm:h-80 md:h-96 flex items-center justify-center`}
          >
            <img
              src="/About_02.jpg"
              alt="Img"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto pb-8 sm:pb-12">
          <div className="text-left">
            <p className="text-sm mb-4">
              To keep you on the road to safety, here are a few basic tips for
              motorists at rail crossings:
            </p>

            <ul className="space-y-4 sm:space-y-6 text-sm">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Expect a train at any time. Trains can run anytime of day or
                  night, on any track, in any direction.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Don&apos;t be fooled. The train is closer and faster than you
                  think. It&apos;s easy to misjudge a train&apos;s speed and its
                  distance, especially at night. If you see a train, just wait.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Trains can&apos;t stop quickly or swerve; be prepared to
                  yield. After fully applying the brakes, a loaded freight train
                  traveling at 55 miles per hour takes a mile or more to stop.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Expect a train at any time. Trains can run anytime of day or
                  night, on any track, in any direction.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Don&apos;t be fooled. The train is closer and faster than you
                  think. It&apos;s easy to misjudge a train&apos;s speed and its
                  distance, especially at night. If you see a train, just wait.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Trains can&apos;t stop quickly or swerve; be prepared to
                  yield. After fully applying the brakes, a loaded freight train
                  traveling at 55 miles per hour takes a mile or more to stop.
                </span>
              </li>

              <li className="flex">
                <span className="mr-2">•</span>
                <span>
                  Stop and wait when gates are down or lights are flashing. Only
                  continue across after the gates go up and red lights stop
                  flashing. Remember, too, that when on foot, you should stay
                  off railroad cars and tracks. It&apos;s illegal and too often
                  it&apos;s deadly.
                </span>
              </li>
            </ul>

            <p className="mt-4 sm:mt-6 text-sm">
              These tips come from the safety experts at Voith Turbo, York, Pa.,
              which manufactures a device that helps trains with braking, to
              make train travel even better. The new type of railcar is on track
              to save Americans time, trouble and maybe even their lives. These
              trains can go from stations in the suburbs to stations in the city
              without switching locomotives. Such flexible trains, called
              DMUs-or Diesel Multiple Units-were designed so commuters in the
              suburbs would not have to switch to locomotives that work only on
              city rails. According to Colorado Railcar Manufacturing, the
              company that designed the cars, the DMU combines its drive systems
              and passenger accommodations into a single unit-each DMU has
              seating for 90 passengers and can pull additional motorized
              coaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutsPage;
