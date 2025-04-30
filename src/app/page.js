"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import blogs from "../../utils/blogs";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import AuthorProfile from "@/components/AuthorProfile";
import DestinationsList from "@/components/DestinationList";
import Newsletter from "@/components/Newsletter";
import CategorySection from "@/components/CategorySection";
import { motion, AnimatePresence } from "framer-motion";
import DestinationGuide from "@/components/DestinationGuide";
import NextDestinationCard from "@/components/NextDestinationCard";
import { useDarkMode } from "../../context/DarkModeContext";

function Homepage() {
  const [heroArticles, setHeroArticles] = useState(blogs.articles);
  const [allArticles, setAllArticles] = useState(blogs.articles);
  const [filteredArticles, setFilteredArticles] = useState(blogs.articles);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageTransition, setPageTransition] = useState("next");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const articlesPerPage = currentPage === 1 ? 6 : 6;
  const { isDarkMode } = useDarkMode();

  const [circles] = useState(() => Array(6).fill(null));
  const BlurCircle = ({ size, delay }) => {
    const style = {
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };

    return (
      <div
        className="absolute bg-gradient-to-r from-white-500/20 to-blue-500/20 rounded-full blur-2xl animate-move"
        style={style}
      />
    );
  };
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredArticles(allArticles);
    } else {
      const filtered = allArticles.filter(
        (article) => article.category === selectedCategory
      );
      setFilteredArticles(filtered);
    }
    setCurrentPage(1);
  }, [selectedCategory, allArticles]);

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroArticles.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === heroArticles.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const truncateText = (text) => {
    if (text.length <= 120) return text;
    const truncated = text.substring(0, 120).split(" ").slice(0, -1).join(" ");
    return `${truncated}...`;
  };

  const currentArticle = heroArticles[currentIndex] || heroArticles[0];

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setPageTransition(pageNumber > currentPage ? "next" : "prev");
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className={`relative transition-all duration-700 ${
        isDarkMode ? "bg-gradient-to-br from-[#020708] to-black " : "bg-white"
      } w-full`}
    >
      {isDarkMode && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {circles.map((_, i) => (
            <BlurCircle
              key={i}
              size={`${Math.random() * 400 + 200}px`}
              delay={Math.random() * 5}
            />
          ))}
        </div>
      )}

      <div className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {heroArticles.map((article, index) => (
            <div
              key={article.id}
              className={`absolute inset-0 bg-black transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={`/${article.imageUrl}`}
                alt={article.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  isDarkMode ? "opacity-50" : "opacity-100"
                }`}
                priority={index === currentIndex}
              />
            </div>
          ))}
        </div>

        <div className="mx-auto w-full h-full relative px-4 flex items-end">
          <div
            className={`${
              isDarkMode
                ? "bg-black/20 backdrop-blur-md border border-white/20 shadow-inner"
                : "bg-white"
            } shadow-lg z-20 transition-all duration-500 ease-in-out flex justify-center items-center ${
              isAnimating
                ? direction === "right"
                  ? "-translate-x-10 opacity-0"
                  : "translate-x-10 opacity-0"
                : "translate-x-0 opacity-100"
            } 
            absolute bottom-0
            w-11/12 max-w-lg mx-auto p-6 min-h-72
            sm:p-8 sm:min-h-80
            md:left-10 md:p-10 md:min-h-96
            lg:left-60`}
          >
            <div>
              <div className="mb-3 md:mb-4">
                <span
                  className={`text-xs sm:text-sm  ${
                    isDarkMode ? "text-white" : "text-gray-600"
                  } font-medium`}
                >
                  {currentArticle.category}
                </span>
              </div>
              <h1
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                } text-2xl sm:text-3xl md:text-4xl font-cormorant-garamond font-semibold mb-3 md:mb-4 leading-tight`}
              >
                {currentArticle.title}
              </h1>
              <p
                className={`${
                  isDarkMode ? "text-neutral-300" : "text-gray-400"
                } mb-4 md:mb-6 text-sm sm:text-base`}
              >
                {truncateText(currentArticle.excerpt)}
              </p>
              <Link href={`/articles/${currentArticle.id}`}>
                <span
                  className={`inline-block ${
                    isDarkMode
                      ? "bg-white text-black hover:bg-neutral-300"
                      : "bg-black text-white hover:bg-gray-800"
                  } px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium  transition-colors`}
                >
                  Read more
                </span>
              </Link>

              <div className="absolute top-0 right-0 flex sm:-right-14">
                <button
                  onClick={handlePrev}
                  className={`${
                    isDarkMode
                      ? "bg-black/70 text-white"
                      : "bg-black text-white"
                  } p-2 sm:p-4 hover:bg-gray-800 transition-colors`}
                  aria-label="Previous"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white text-black p-2 sm:p-4 hover:bg-gray-100 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategorySection
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex max-lg:flex-wrap w-full gap-12">
          <div className="w-full">
            <div>
              <h1
                className={`text-3xl font-serif mb-8 ${
                  isDarkMode ? "text-white" : ""
                }`}
              >
                {selectedCategory === "All"
                  ? "Recent articles"
                  : `${selectedCategory} articles`}
              </h1>

              {filteredArticles.length === 0 ? (
                <div className="py-16 text-center">
                  <h3
                    className={`text-xl font-medium ${
                      isDarkMode ? "text-white" : "text-gray-600"
                    }`}
                  >
                    No articles found in this category.
                  </h3>
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="mt-4 inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    View all articles
                  </button>
                </div>
              ) : (
                <>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentPage + selectedCategory}
                      className="space-y-12"
                      initial={{
                        opacity: 0,
                        x: pageTransition === "next" ? 100 : -100,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeInOut" },
                      }}
                      exit={{
                        opacity: 0,
                        x: pageTransition === "next" ? -100 : 100,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {currentPage === 1 && currentArticles.length > 3 ? (
                        <>
                          {currentArticles.slice(0, 3).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                          ))}

                          <DestinationGuide />

                          {currentArticles.slice(3, 6).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                          ))}
                        </>
                      ) : (
                        currentArticles.map((article) => (
                          <ArticleCard key={article.id} article={article} />
                        ))
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center mr-2 justify-center bg-black hover:bg-gray-800 text-white ${
                          currentPage === 1
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <ChevronLeft size={16} />
                      </button>

                      {[...Array(Math.min(totalPages, 5))].map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => handlePageChange(idx + 1)}
                          className={`w-8 h-8 flex items-center justify-center ${
                            currentPage === idx + 1
                              ? "border border-gray-300"
                              : ""
                          } ${isDarkMode ? "text-white" : ""}`}
                        >
                          {idx + 1}
                        </button>
                      ))}

                      {totalPages > 5 && currentPage < totalPages - 2 && (
                        <span
                          className={`mx-1 ${isDarkMode ? "text-white" : ""}`}
                        >
                          ...
                        </span>
                      )}

                      {totalPages > 5 && currentPage < totalPages - 1 && (
                        <button
                          onClick={() => handlePageChange(totalPages)}
                          className={`w-8 h-8 flex items-center justify-center ${
                            currentPage === totalPages
                              ? "border border-gray-300"
                              : ""
                          } ${isDarkMode ? "text-white" : ""}`}
                        >
                          {totalPages}
                        </button>
                      )}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center ml-2 justify-center bg-black hover:bg-gray-800 text-white ${
                          currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex max-lg:justify-center items-center max-lg:w-full flex-col gap-10 p-6">
            <div className="max-sm:flex-col flex lg:flex-col gap-10">
              <AuthorProfile />
              <DestinationsList />
            </div>
            <div className="max-sm:flex-col flex lg:flex-col gap-10">
              <Newsletter theme={"black"} />
              <NextDestinationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
