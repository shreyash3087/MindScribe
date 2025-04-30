import React from "react";
import { useRouter } from "next/navigation";

const ArticleCard = ({ article, mode }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/articles/${article.id}`);
  };

  return (
    <div
      className={`flex w-full ${
        mode === "card"
          ? "flex-wrap gap-2"
          : "flex-col sm:flex-row gap-6 sm:gap-10"
      } space-y-4 mb-8`}
    >
      <div
        className={`bg-gray-200 flex items-center justify-center ${
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
            className="object-cover h-full w-full object-center"
            alt={article.title}
          />
        </div>
      </div>

      <div
        className={`flex items-center w-full ${
          mode === "card" ? "min-h-[300px]" : "h-full py-6"
        }`}
      >
        <div className="w-full h-full justify-between flex flex-col ">
          <div>
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium text-gray-700">
                #{article.category}
              </span>
              <span className="text-xs text-gray-500 ml-3 flex gap-2 items-center">
                <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                <div>{article.readingTime} minutes reading</div>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif mb-2 leading-8 sm:leading-10">
              {article.title}
            </h2>

            <p className="text-neutral-500 mb-4">{article.excerpt}</p>
          </div>
          <button
            className="bg-black w-32 text-white py-2 px-4 text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
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
