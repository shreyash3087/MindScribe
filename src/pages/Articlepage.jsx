"use client";
import Image from "next/image";
import blogs from "../../utils/blogs";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlogLoader from "@/components/BlogLoader";
import ArticleCard from "@/components/ArticleCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ContentBlock = ({ block }) => {
  if (!block) return null;

  switch (block.type) {
    case "paragraph":
      return <p className={block.className}>{block.text}</p>;

    case "heading":
      return <h2 className={block.className}>{block.text}</h2>;

    case "subheading":
      return <div className={block.className}>{block.text}</div>;

    case "image":
      return (
        <img
          src={block.src}
          alt={block.alt || "Article image"}
          className={block.className}
        />
      );

    case "container":
      if (block.blocks) {
        return (
          <div className={block.className}>
            {block.blocks.map((childBlock, index) => (
              <ContentBlock key={index} block={childBlock} />
            ))}
          </div>
        );
      }
      return <div className={block.className}>{block.children}</div>;

    default:
      return null;
  }
};

const ContentSection = ({ section }) => {
  if (!section) return null;

  return (
    <div id={section.id}>
      {section.blocks &&
        section.blocks.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
    </div>
  );
};

const TableOfContents = ({ subParts, activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-6 sticky top-24">
      {subParts.map((part, index) => (
        <div key={index} className="flex items-start mb-1 text-xs">
          <span className="mr-2">•</span>
          <button
            onClick={() => scrollToSection(part)}
            className={`text-left cursor-pointer ${
              activeSection === part ? "font-semibold" : ""
            }`}
          >
            {part}
          </button>
        </div>
      ))}
    </div>
  );
};

function ArticlePage() {
  const [articles] = useState(blogs.articles);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});
  const pathname = usePathname();
  const iconMap = {
    faInstagram: faInstagram,
    faLinkedin: faLinkedin,
    faTwitter: faTwitter,
    faFacebook: faFacebook,
  };
  
  useEffect(() => {
    const id = pathname.split("/").pop();
    const articleId = parseInt(id);

    const article = articles.find((article) => article.id === articleId);
    setCurrentArticle(article);
  }, [pathname, articles]);

  useEffect(() => {
    if (currentArticle?.subParts?.length) {
      sectionRefs.current = {};
      currentArticle.subParts.forEach(part => {
        const element = document.getElementById(part);
        if (element) sectionRefs.current[part] = element;
      });
    }
  }, [currentArticle]);
  useEffect(() => {
    const handleScroll = () => {
      if (!currentArticle?.subParts?.length) return;
      const scrollPosition = window.scrollY + 150;
      let currentSection = currentArticle.subParts[0];
      
      for (const section of currentArticle.subParts) {
        const element = sectionRefs.current[section];
        if (!element) continue;
        
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;
        
        if (scrollPosition >= offsetTop) {
          currentSection = section;
        } else {
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentArticle]);

  const recommendedArticles = articles.filter(article => 
    article.id !== currentArticle?.id
  );

  if (!currentArticle) {
    return (
      <div>
        <BlogLoader />
      </div>
    );
  }

  return (
    <div>
      <div className="h-screen w-full relative">
        <Image
          src={`/${currentArticle.imageUrl}`}
          alt="Article Banner"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-auto max-w-6xl lg:-top-52 flex gap-10 md:-top-40 sm:-top-32 -top-60 max-sm:mx-4 z-20 relative bg-white px-4 sm:px-6 lg:px-8">
        {currentArticle.subParts && currentArticle.subParts.length > 0 && (
          <div className="w-40 mt-64 relative max-md:hidden">
            <div className="sticky top-24">
              <TableOfContents 
                subParts={currentArticle.subParts} 
                activeSection={activeSection}
              />
            </div>
          </div>
        )}
        <div>
          <div className="w-full max-w-2xl mx-auto">
            <div className="pt-8 sm:pt-12 md:pt-16 pb-4 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6 px-10">
                {currentArticle.title}
              </h1>
              <div className="flex justify-between flex-wrap max-sm:justify-center gap-6 items-center my-6">
                <div className="flex gap-2 items-center text-sm">
                  <div>{currentArticle.category}</div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <div className="text-neutral-400">
                    {currentArticle.readingTime} minutes reading
                  </div>
                  <div className="w-1 h-1 rounded-full bg-neutral-400"></div>
                  <div className="text-neutral-400">
                    {currentArticle.submissionDate}
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-2">
                  {currentArticle.socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black w-8 h-8 flex items-center justify-center hover:bg-neutral-800 transition-colors"
                      aria-label={social.name}
                    >
                      <FontAwesomeIcon
                        icon={iconMap[social.icon]}
                        className="text-white text-lg sm:text-xl"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="border-t border-b border-gray-300 py-4 sm:py-6 mb-6 sm:mb-8">
                <p className="text-xl max-w-lg mx-auto w-full sm:text-2xl italic font-light max-sm:text-lg">
                  {currentArticle.excerpt}
                </p>
              </div>
            </div>
          </div>

          <div className="article-content">
            {currentArticle.fullContent.map((section, index) => (
              <ContentSection key={index} section={section} />
            ))}
          </div>
          {currentArticle.source && (
            <div className="mx-auto mt-6 max-w-2xl w-full text-sm text-neutral-400">
              <a target="__blank" href={currentArticle.source}>
                Source: {currentArticle.source}
              </a>
            </div>
          )}
        </div>
        <div className="w-40 max-md:hidden"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="font-serif text-2xl mb-6">Interesting Articles to Read</div>
        <div className="relative ml-4">
        <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 16
              }
            }}
            className="w-full py-4 mx-auto"
          >
            {recommendedArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="min-w-[330px] max-w-[340px]">
                  <ArticleCard article={article} mode="card" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;