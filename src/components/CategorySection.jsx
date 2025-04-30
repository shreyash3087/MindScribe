"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDarkMode } from "../../context/DarkModeContext";

function CategorySection({ selectedCategory, onCategoryChange }) {
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode } = useDarkMode();
  
  const categories = [
    {
      name: "All",
      image: "/Categories/All.jpg"
    },
    {
      name: "Travels",
      image: "/Categories/Travel.jpg"
    },
    {
      name: "Foods",
      image: "/Categories/Foods.jpg"
    },
    {
      name: "Guides",
      image: "/Categories/Guides.jpg"
    },
    {
      name: "Stories",
      image: "/Categories/Stories.jpg"
    },
    {
      name: "Cities",
      image: "/Categories/Cities.jpeg"
    },
    {
      name: "Countries",
      image: "/Categories/Countries.jpg"
    }
  ];

  const categoryIndex = categories.findIndex(cat => cat.name === selectedCategory);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryPrev = () => {
    const newIndex = categoryIndex === 0 ? categories.length - 1 : categoryIndex - 1;
    onCategoryChange(categories[newIndex].name);
  };

  const handleCategoryNext = () => {
    const newIndex = categoryIndex === categories.length - 1 ? 0 : categoryIndex + 1;
    onCategoryChange(categories[newIndex].name);
  };

  if (isMobile) {
    return (
      <div className={`w-full py-10 px-4 ${isDarkMode ? "text-white" : ""}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-cormorant-garamond font-bold mb-6">
            Explore by category
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index}
                className={`p-4 ${
                  category.name === selectedCategory 
                    ? 'bg-black text-white' 
                    : isDarkMode 
                      ? 'bg-black/20 backdrop-blur-md border border-white/10 text-white' 
                      : 'bg-white text-black'
                } transition-colors cursor-pointer`}
                onClick={() => onCategoryChange(category.name)}
              >
                <h3 className="text-lg font-medium">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full py-20 ${isDarkMode ? "text-white" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-2">
          <h2 className="text-3xl font-cormorant-garamond font-bold">
            Explore by category
          </h2>
          <div className="absolute top-0 right-0 flex">
            <button
              onClick={handleCategoryPrev}
              className={`${
                isDarkMode 
                  ? "bg-white text-black hover:bg-neutral-300" 
                  : "bg-black text-white hover:bg-gray-800"
              } p-3 mr-2 transition-colors`}
              aria-label="Previous Category"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleCategoryNext}
              className={`${
                isDarkMode 
                  ? "bg-white text-black hover:bg-neutral-300" 
                  : "bg-black text-white hover:bg-gray-800"
              } p-3 transition-colors`}
              aria-label="Next Category"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="flex space-x-4 items-center min-h-72 overflow-hidden">
          {categories.map((category, index) => {
            const isActive = category.name === selectedCategory;
            const visibleCount = 7;
            const offset = Math.floor(visibleCount / 2);

            let position = index - categoryIndex;
            if (position < -offset) position += categories.length;
            if (position > offset) position -= categories.length;

            const isVisible = position >= -offset && position <= offset;

            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out cursor-pointer
                  ${isVisible ? "block" : "hidden"}
                  ${isActive ? "w-1/5" : "w-1/7"}`}
                onClick={() => onCategoryChange(category.name)}
              >
                <div
                  className={`relative aspect-square overflow-hidden
                    ${isActive ? "transform scale-105" : "transform scale-100"}
                    transition-all duration-300 ease-in-out`}
                >
                  {isActive ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={category.image}
                        alt={category.name}
                        width={400}
                        height={400}
                        className={`object-cover w-full h-full ${isDarkMode ? "opacity-80" : ""}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <h3 className="text-white text-xl font-medium">
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex items-center justify-center w-full h-full ${
                      isDarkMode 
                        ? "bg-black/50 backdrop-blur-md border border-white/10 text-white" 
                        : "bg-black text-white"
                    }`}>
                      <h3 className="text-xl font-medium">{category.name}</h3>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;