import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form Submitted:", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md sm:max-w-lg bg-white rounded-xl shadow-lg p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Contact Me
        </h2>

      
        <div className="space-y-2 text-gray-600 text-sm sm:text-base mb-6">
          <p><span className="font-semibold">Name:</span> Ismail Koppal</p>
          <p><span className="font-semibold">Role:</span> React.js Developer</p>
          <p><span className="font-semibold">Email:</span> ismailkpl107@gmail.com</p>
          <p><span className="font-semibold">Location:</span> Bengaluru, India</p>
        </div>

      
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4 text-sm text-center">
            ✅ Your request has been successfully sent!
          </div>
        )}

      
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-md font-medium hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
