import React from "react";
import { useRouter } from "next/navigation";
import { useDarkMode } from "../../context/DarkModeContext";

const ArticleCard = ({ article, mode }) => {
  const router = useRouter();
  const { isDarkMode } = useDarkMode();

  const handleClick = () => {
    router.push(`/articles/${article.id}`);
  };

  return (
    <div
      className={`flex w-full ${
        mode === "card"
          ? "flex-wrap gap-2"
          : "flex-col sm:flex-row gap-6 sm:gap-10"
      } space-y-4 mb-8 ${
        isDarkMode ? "text-white" : ""
      }`}
    >
      <div
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        } flex items-center justify-center ${
          mode === "card" ? "w-full" : ""
        } `}
      >
        <div
          className={`${
            mode === "card" ? "h-48 w-full" : "sm:w-72 sm:h-72"
          } flex items-center justify-center`}
        >
          <img
            src={`/${article.imageUrl}`}
            className={`object-cover h-full w-full object-center ${
              isDarkMode ? "opacity-80" : ""
            }`}
            alt={article.title}
          />
        </div>
      </div>

      <div
        className={`flex items-center w-full ${
          mode === "card" ? "min-h-[300px]" : "h-full py-6"
        } ${
          isDarkMode
            ? "bg-black/20 backdrop-blur-md border border-white/10 shadow-inner p-4"
            : ""
        }`}
      >
        <div className="w-full h-full justify-between flex flex-col">
          <div>
            <div className="flex items-center mb-2">
              <span className={`text-xs font-medium ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}>
                #{article.category}
              </span>
              <span className={`text-xs ${
                isDarkMode ? "text-gray-300" : "text-gray-500"
              } ml-3 flex gap-2 items-center`}>
                <div className={`w-1 h-1 ${
                  isDarkMode ? "bg-gray-400" : "bg-neutral-300"
                } rounded-full`}></div>
                <div>{article.readingTime} minutes reading</div>
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-serif mb-2 leading-8 sm:leading-10 ${
              isDarkMode ? "text-white" : ""
            }`}>
              {article.title}
            </h2>

            <p className={`${
              isDarkMode ? "text-gray-300" : "text-neutral-500"
            } mb-4`}>
              {article.excerpt}
            </p>
          </div>
          <button
            className={`${
              isDarkMode
                ? "bg-white text-black hover:bg-neutral-300"
                : "bg-black text-white hover:bg-gray-800"
            } w-32 py-2 px-4 text-sm font-medium transition-colors cursor-pointer`}
            onClick={handleClick}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;