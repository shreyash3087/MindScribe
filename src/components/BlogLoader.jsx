import React from 'react';

export default function BlogLoader() {
  return (
    <div className="min-h-screen fixed top-0 w-full h-full z-50 flex justify-center items-center bg-gray-50">
      <div className="relative">
        <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-pink-500 border-r-pink-400 border-b-pink-300 animate-spin"></div>
        <div className="absolute top-2 left-2 w-16 h-16 rounded-full border-4 border-transparent border-t-transparent border-r-pink-500 border-b-pink-500 border-l-pink-300 animate-spin-reverse"></div>
        <div className="absolute top-[35px] left-[35px] w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
      </div>
      
      <style jsx>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
}