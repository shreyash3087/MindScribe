"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import Image from "next/image";

function InstagramSection() {
  const [loadedImages, setLoadedImages] = useState([]);

  const instagramPosts = [
    { id: 1, likes: 1231, comments: 543, image: "/Instagram/0.jpg" },
    { id: 2, likes: 876, comments: 321, image: "/Instagram/1.jpg" },
    { id: 3, likes: 1543, comments: 432, image: "/Instagram/2.jpeg" },
    { id: 4, likes: 992, comments: 245, image: "/Instagram/3.jpg" },
    { id: 5, likes: 1125, comments: 389, image: "/Instagram/4.jpg" },
    { id: 6, likes: 867, comments: 210, image: "/Instagram/5.jpg" },
    { id: 7, likes: 1038, comments: 276, image: "/Instagram/0.jpg" },
    { id: 8, likes: 945, comments: 198, image: "/Instagram/1.jpg" },
  ];

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => [...prev, id]);
  };

  return (
    <div>
      <div className="pt-10">
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <a
            href="https://www.instagram.com/x3_shreyash_x3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black py-3 px-4 flex justify-between items-center w-full max-w-sm mx-auto sm:mx-0"
          >
            <div className="text-white font-medium select-none">
              Follow me on Instagram
            </div>
            <div>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-2xl"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel, FreeMode]}
          spaceBetween={8}
          slidesPerView={2}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            480: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 8,
            },
          }}
        >
          {instagramPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="relative group w-64">
                <div className="aspect-square bg-gray-200 flex items-center justify-center relative min-h-[200px]">
                  {!loadedImages.includes(post.id) && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse rounded" />
                  )}
                  <Image
                    src={post.image}
                    alt="Instagram post"
                    fill
                    className={`object-cover select-none ${
                      loadedImages.includes(post.id)
                        ? "opacity-100"
                        : "opacity-0"
                    } transition-opacity duration-300`}
                    draggable="false"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => handleImageLoad(post.id)}
                  />

                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center text-white select-none">
                    <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="mr-1 sm:mr-2 text-lg sm:text-xl"
                        />
                        <span className="text-sm sm:text-base">
                          {post.likes.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faComment}
                          className="mr-1 sm:mr-2 text-lg sm:text-xl"
                        />
                        <span className="text-sm sm:text-base">
                          {post.comments.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default InstagramSection;
