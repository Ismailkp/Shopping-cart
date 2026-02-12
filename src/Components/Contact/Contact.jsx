import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-lg p-5 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
          Contact Me
        </h2>

        <div className="space-y-2 text-gray-600 text-sm sm:text-base">
          <p><span className="font-semibold">Name:</span> Ismail Koppal</p>
          <p><span className="font-semibold">Role:</span> React.js Developer</p>
          <p><span className="font-semibold">Email:</span> ismailkpl107@gmail.com</p>
          <p><span className="font-semibold">Location:</span> Bengaluru, India</p>
        </div>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-md px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-md px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-md px-3 py-2 sm:px-4 sm:py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
