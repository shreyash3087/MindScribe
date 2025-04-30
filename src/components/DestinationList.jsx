import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";

const DestinationsList = () => {
  const Cities = ["Tokyo", "Rome", "San Francisco", "San Jose"];
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`mb-8 w-72 max-sm:w-full ${isDarkMode ? "text-white" : ""}`}>
      <h3 className="text-xl font-bold mb-4">Destinations</h3>
      <div className="space-y-4">
        {Cities.map((city, index) => (
          <div
            className={`${
              isDarkMode 
                ? "bg-black/50 backdrop-blur-md border border-white/10 shadow-inner" 
                : "bg-black"
            } text-white p-4 flex flex-col justify-center items-center`}
            key={index}
          >
            <span className="border-t border-white border-2 w-12 inline-block mb-2"></span>
            <span className="font-medium">{city}</span>
          </div>
        ))}

        <button className={`${
          isDarkMode
            ? "bg-white text-black hover:bg-neutral-300"
            : "bg-black text-white hover:bg-gray-800"
        } p-4 w-full font-medium transition-colors`}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default DestinationsList;