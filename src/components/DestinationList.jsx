import React from "react";

const DestinationsList = () => {
  const Cities = ["Tokyo", "Rome", "San Francisco", "San Jose"];
  return (
    <div className="mb-8 w-72 max-sm:w-full">
      <h3 className="text-xl font-bold mb-4">Destinations</h3>
      <div className="space-y-4">
        {Cities.map((city, index) => (
          <div
            className="bg-black text-white p-4 flex flex-col justify-center items-center"
            key={index}
          >
            <span className="border-t border-white border-2 w-12 inline-block mb-2"></span>
            <span className="font-medium">{city}</span>
          </div>
        ))}

        <button className="bg-black text-white p-4 w-full font-medium">
          Read more
        </button>
      </div>
    </div>
  );
};

export default DestinationsList;
