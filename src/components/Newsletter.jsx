import React, { useState } from "react";

function Newsletter({ theme = "white" }) {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setShowPopup(true);
      setEmail("");
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
  };

  return (
    <div className="relative">
      <div className={`border w-full ${theme === "black" ? "border-neutral-700 p-6 max-w-72 max-sm:max-w-full" : "border-neutral-400 py-8 px-16 max-sm:px-6 max-w-xl"}`}>
        <h2 className={`text-xl md:text-2xl mb-2 font-serif ${theme === "black" ? "text-black text-center" : "text-white"}`}>
          Newsletter
        </h2>
        <p className={`mb-6 text-sm ${theme === "black" ? "text-neutral-600 text-center" : "text-neutral-400"}`}>
          Subscribe to receive exclusive content updates, travel & photo tips!
        </p>

        <div className={`flex ${theme === "black" ? "border-gray-500 flex-wrap gap-4" : "max-sm:flex-col gap-10 max-sm:gap-4"}`}>
          <div className={`border-b w-full ${theme === "black" ? "border-gray-500" : "border-gray-400"} relative`}>
            <label className={`absolute text-xs ${theme === "black" ? "text-black" : "text-white"}`} htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className={`bg-transparent w-full mt-3 py-2 focus:outline-none text-sm ${theme === "black" ? "text-black" : "text-white"}`}
            />
          </div>

          <button 
            onClick={handleSubmit}
            className={`px-12 py-3 self-start text-sm font-medium ${theme === "black" ? "bg-black text-white w-full" : "bg-white text-black"}`}>
            Subscribe
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">Thank you for subscribing!</h3>
                </div>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="ml-4 text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  We're excited to share our exclusive content, travel insights, and photography tips with you. 
                  Keep an eye on your inbox!
                </p>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Newsletter;