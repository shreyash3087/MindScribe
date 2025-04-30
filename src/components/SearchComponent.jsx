"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import blogs from "../../utils/blogs";

const SearchComponent = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [recentRecommendations, setRecentRecommendations] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (blogs && blogs.articles && blogs.articles.length > 0) {
      const shuffled = [...blogs.articles].sort(() => 0.5 - Math.random());
      setRecentRecommendations(shuffled.slice(0, 3));
    }
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = blogs.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        (article.destination &&
          article.destination.toLowerCase().includes(query))
    );
    setSearchResults(results.slice(0, 3));
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        closeSearch();
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [isSearchOpen]);

  const openSearch = () => {
    setIsSearchOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    document.body.style.overflow = "auto";
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const navigateToBlog = (id) => {
    router.push(`/articles/${id}`);
    closeSearch();
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;

    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "gi"
    );
    return text.replace(
      regex,
      '<span class="bg-yellow-200 text-black">$1</span>'
    );
  };

  return (
    <>
      <button
        onClick={openSearch}
        className="p-2 focus:outline-none relative z-50 cursor-pointer rounded-full transition-colors duration-300"
        aria-label="Search"
      >
        <Search size={24} />
      </button>

      <div
        className={`fixed inset-0 text-black bg-black/75 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={searchRef}
          className={`relative mx-auto mt-24 w-full max-w-3xl bg-white shadow-2xl transition-all duration-500 ${
            isSearchOpen
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform -translate-y-10"
          }`}
        >
          <div className="flex items-center p-4 border-b">
            <Search size={20} className="text-gray-400 mr-3" />
            <div className="flex-1">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search blogs, destinations, categories..."
                className="w-full text-lg outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button
              onClick={closeSearch}
              className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto p-4">
            {searchQuery.trim() === "" ? (
              <>
                <h3 className="text-sm font-medium text-gray-500 mb-3">
                  Recent Recommendations
                </h3>
                <div className="space-y-4">
                  {recentRecommendations.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => navigateToBlog(article.id)}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      {article.imageUrl && (
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={article.imageUrl}
                            alt="Image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {article.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="inline-block bg-gray-100 px-2 py-1 rounded-full mr-2">
                            {article.category}
                          </span>
                          {article.readingTime} min read
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {truncateText(article.excerpt, 80)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : searchResults.length > 0 ? (
              <>
                <h3 className="text-sm font-medium text-gray-500 mb-3">
                  {searchResults.length === 3 ? (
                    <>Showing top 3 results</>
                  ) : (
                    <>
                      Found {searchResults.length} result
                      {searchResults.length !== 1 ? "s" : ""}
                    </>
                  )}
                </h3>
                <div className="space-y-4">
                  {searchResults.map((article) => (
                    <div
                      key={article.id}
                      onClick={() => navigateToBlog(article.id)}
                      className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                      {article.imageUrl && (
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                          <img
                            src={article.imageUrl}
                            alt="Image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-medium text-gray-900"
                          dangerouslySetInnerHTML={{
                            __html: highlightMatch(article.title, searchQuery),
                          }}
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          <span className="inline-block bg-gray-100 px-2 py-1 rounded-full mr-2">
                            {article.category}
                          </span>
                          {article.readingTime} min read
                        </p>
                        <p
                          className="text-sm text-gray-600 mt-1"
                          dangerouslySetInnerHTML={{
                            __html: highlightMatch(
                              truncateText(article.excerpt, 80),
                              searchQuery
                            ),
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-gray-500">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Try using different keywords or browse our categories
                </p>
              </div>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">
                {searchQuery.trim() === ""
                  ? "Discover new travel stories"
                  : `Press Enter to see all results for "${searchQuery}"`}
              </p>
              <Link
                href={
                  searchQuery.trim()
                    ? `/search?q=${encodeURIComponent(searchQuery)}`
                    : "/categories"
                }
                onClick={closeSearch}
                className="flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-800"
              >
                {searchQuery.trim() ? "View all results" : "Browse categories"}
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;