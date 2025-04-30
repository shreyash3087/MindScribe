"use client";
import ArticleCard from "@/components/ArticleCard";
import blogs from "../../../utils/blogs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Categoriespage() {
  const articles = blogs.articles;

  const uniqueCategories = [
    ...new Set(articles.map((article) => article.category)),
  ];

  return (
    <div className="min-h-screen">
      <div className="w-full pt-28 overflow-hidden px-4 md:px-6">
        <div className="font-serif text-2xl md:text-3xl mb-8 md:mb-12 max-w-[68rem] mx-auto">
          Categories
        </div>

        {uniqueCategories.map((category, index) => {
          const categoryArticles = articles.filter(
            (article) => article.category === category
          );
          if (categoryArticles.length === 0) {
            return null;
          }

          return (
            <div key={category} className="mb-10 md:mb-16">
              <div className="flex justify-between items-center relative mb-4 md:mb-6 max-w-[68rem] mx-auto">
                <div className="text-lg md:text-xl font-serif">{category}</div>
                <div className="flex gap-1 md:gap-2">
                  <button
                    className={`swiper-custom-prev-${index} bg-black text-white p-1 md:p-2 hover:bg-gray-800 transition-colors`}
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} className="md:w-5 md:h-5" />
                  </button>
                  <button
                    className={`swiper-custom-next-${index} bg-black text-white p-1 md:p-2 hover:bg-gray-800 transition-colors`}
                    aria-label="Next"
                  >
                    <ChevronRight size={16} className="md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
              <div className="relative left-0 md:left-12 lg:left-24">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView="auto"
                  navigation={{
                    prevEl: `.swiper-custom-prev-${index}`,
                    nextEl: `.swiper-custom-next-${index}`,
                  }}
                  className="w-full md:w-[calc(100%-6rem)] lg:w-[calc(100%-12rem)]"
                >
                  {categoryArticles.map((article) => (
                    <SwiperSlide key={article.id} className="!w-auto">
                      <div className="min-w-[220px] max-w-[260px] sm:min-w-[280px] sm:max-w-[300px] md:min-w-[340px] md:max-w-[360px]">
                        <ArticleCard article={article} mode="card" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categoriespage;