import React, { useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";

function NextDestinationCard() {
  const [focusedField, setFocusedField] = useState("");
  const { isDarkMode } = useDarkMode();
  
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };
  
  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className={`border w-full p-6 max-w-72 max-sm:max-w-full ${
      isDarkMode 
        ? "border-neutral-700 bg-black/50 backdrop-blur-md text-white" 
        : "border-neutral-700 bg-white text-black"
    }`}>
      <h2 className={`text-xl md:text-2xl font-serif ${
        isDarkMode ? "text-white" : "text-black"
      }`}>
        Where to next?
      </h2>
      <p className="mb-6 text-sm text-neutral-400">
        There&apos;s a wide world waiting for you
      </p>
      <div className="flex border-gray-500 flex-wrap gap-4">
        <div className={`border-b w-full ${
          focusedField === "destination" 
            ? isDarkMode ? "border-white border-b-2" : "border-black border-b-2" 
            : isDarkMode ? "border-gray-600" : "border-gray-500"
        }`}>
          <label className={`absolute text-xs ${
            isDarkMode ? "text-neutral-300" : "text-black"
          }`} htmlFor="destination">
            Destination Name
          </label>
          <input
            id="destination"
            type="text"
            placeholder="Japan"
            className={`bg-transparent w-full mt-3 py-2 focus:outline-none text-sm ${
              isDarkMode ? "text-white placeholder-gray-500" : "text-black placeholder-gray-400"
            }`}
            onFocus={() => handleFocus("destination")}
            onBlur={handleBlur}
          />
        </div>
        <div className={`border-b w-full ${
          focusedField === "checkin" 
            ? isDarkMode ? "border-white border-b-2" : "border-black border-b-2" 
            : isDarkMode ? "border-gray-600" : "border-gray-500"
        }`}>
          <input
            id="checkin"
            type="text"
            placeholder="Check-in date"
            className={`bg-transparent w-full mt-3 py-2 focus:outline-none text-sm ${
              isDarkMode ? "text-white placeholder-gray-500" : "text-black placeholder-gray-400"
            }`}
            onFocus={() => handleFocus("checkin")}
            onBlur={handleBlur}
          />
        </div>
        <div className={`border-b w-full ${
          focusedField === "checkout" 
            ? isDarkMode ? "border-white border-b-2" : "border-black border-b-2" 
            : isDarkMode ? "border-gray-600" : "border-gray-500"
        }`}>
          <input
            id="checkout"
            type="text"
            placeholder="Check-out date"
            className={`bg-transparent w-full mt-3 py-2 focus:outline-none text-sm ${
              isDarkMode ? "text-white placeholder-gray-500" : "text-black placeholder-gray-400"
            }`}
            onFocus={() => handleFocus("checkout")}
            onBlur={handleBlur}
          />
        </div>
        <button className={`px-12 py-3 self-start text-sm font-medium w-full ${
          isDarkMode 
            ? "bg-white text-black hover:bg-neutral-300" 
            : "bg-black text-white hover:bg-gray-800"
        } transition-colors`}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default NextDestinationCard;