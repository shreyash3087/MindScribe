import React from "react";
import Link from "next/link";
import InstagramSection from "./InstagramSection";

function Footer() {
  const currentDate = new Date();
  
  return (
    <div>
      <InstagramSection />
      <div className="flex max-w-7xl mx-auto px-4 py-6 items-center justify-between w-full flex-col md:flex-row gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <div className="font-serif text-xl">MindScribe</div>
          <div className="text-xs text-neutral-400">
            Copyright &copy; {currentDate.getFullYear()}. All rights Reserved
          </div>
        </div>
        <div className="text-sm flex gap-4 sm:gap-6 text-neutral-400 flex-wrap justify-center">
          <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-neutral-600 transition-colors">About Me</Link>
          <Link href="/categories" className="hover:text-neutral-600 transition-colors">Categories</Link>
          <Link href="/contact" className="hover:text-neutral-600 transition-colors">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;