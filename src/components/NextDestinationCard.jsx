import React, { useState } from "react";

function NextDestinationCard() {
  const [focusedField, setFocusedField] = useState("");
  
  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };
  
  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className="border w-full border-neutral-700 p-6 max-w-72 max-sm:max-w-full">
      <h2 className="text-xl md:text-2xl font-serif text-black">
        Where to next?
      </h2>
      <p className="mb-6 text-sm text-neutral-400">
        There&apos;s a wide world waiting for you
      </p>
      <div className="flex border-gray-500 flex-wrap gap-4">
        <div className={`border-b w-full ${focusedField === "destination" ? "border-black border-b-2" : "border-gray-500"}`}>
          <label className="absolute text-xs text-black" htmlFor="destination">
            Destination Name
          </label>
          <input
            id="destination"
            type="text"
            placeholder="Japan"
            className="bg-transparent w-full mt-3 py-2 focus:outline-none text-sm text-black"
            onFocus={() => handleFocus("destination")}
            onBlur={handleBlur}
          />
        </div>
        <div className={`border-b w-full ${focusedField === "checkin" ? "border-black border-b-2" : "border-gray-500"}`}>
          <input
            id="checkin"
            type="text"
            placeholder="Check-in date"
            className="bg-transparent w-full mt-3 py-2 focus:outline-none text-sm text-black"
            onFocus={() => handleFocus("checkin")}
            onBlur={handleBlur}
          />
        </div>
        <div className={`border-b w-full ${focusedField === "checkout" ? "border-black border-b-2" : "border-gray-500"}`}>
          <input
            id="checkout"
            type="text"
            placeholder="Check-out date"
            className="bg-transparent w-full mt-3 py-2 focus:outline-none text-sm text-black"
            onFocus={() => handleFocus("checkout")}
            onBlur={handleBlur}
          />
        </div>
        <button className="px-12 py-3 self-start text-sm font-medium bg-black text-white w-full">
          Read More
        </button>
      </div>
    </div>
  );
}

export default NextDestinationCard;