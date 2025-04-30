import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-serif mb-8">Contact</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
            <img src="/ContactUS.jpg" alt="Contact" className="object-cover h-full w-full" />
          </div>
          <div className="mt-8">
            <p className="text-gray-800">
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
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black resize-none"
              ></textarea>
            </div>

            <div>
              <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
