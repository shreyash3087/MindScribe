"use client"
import React from "react";
import { useDarkMode } from "../../../context/DarkModeContext";

const ContactPage = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`transitional-all duration-300 w-full ${isDarkMode ? "bg-black text-white" : "text-black"}`}>
    <div className="max-w-6xl mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-serif mb-8">Contact</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
            <img src="/ContactUS.jpg" alt="Contact" className="object-cover h-full w-full" />
          </div>
          <div className="mt-8">
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>
              Get in touch with our team for inquiries about our services. We
              aim to respond to all messages within 24 hours during business
              days. For urgent matters, please consider reaching out via phone.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-10 max-sm:pt-4">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border-b ${
                    isDarkMode 
                      ? "border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-white" 
                      : "border-gray-300 focus:border-black text-black"
                  } py-2 focus:outline-none`}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border-b ${
                    isDarkMode 
                      ? "border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-white" 
                      : "border-gray-300 focus:border-black text-black"
                  } py-2 focus:outline-none`}
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className={`w-full border-b ${
                  isDarkMode 
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-white" 
                    : "border-gray-300 focus:border-black text-black"
                } py-2 focus:outline-none`}
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows="4"
                className={`w-full border-b ${
                  isDarkMode 
                    ? "border-gray-600 bg-transparent text-white placeholder-gray-400 focus:border-white" 
                    : "border-gray-300 focus:border-black text-black"
                } py-2 focus:outline-none resize-none`}
              ></textarea>
            </div>

            <div>
              <button className={`${
                isDarkMode
                  ? "bg-white text-black hover:bg-gray-300"
                  : "bg-black text-white hover:bg-gray-800"
              } px-8 py-3 transition-colors`}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;