// Footer.jsx
import React from "react";

export const Footer = () => {
  const footerLinks = {
    ABOUT: [
      "Contact Us",
      "About Us",
      "Careers",
      "I-Store Stories",
      "Press",
      "I-Store Wholesale",
    ],
    HELP: [
      "Payments",
      "Shipping",
      "Cancellation & Returns",
      "FAQ",
      "Report Infringement",
    ],
    POLICY: [
      "Return Policy",
      "Terms Of Use",
      "Security",
      "Privacy",
      "Sitemap",
      "EPR Compliance",
    ],
    SOCIAL: ["Facebook", "Twitter", "YouTube", "Instagram"],
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 shadow-inner">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-8 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

        {/* Footer Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm tracking-wider">
              {title}
            </h3>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li
                  key={link}
                  className="hover:text-blue-600 hover:underline cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* App Section */}
        <div className="lg:col-span-1">
          <h3 className="text-gray-900 font-semibold mb-4 text-sm tracking-wider">
            EXPERIENCE I-STORE APP
          </h3>
          <p className="mb-3 text-sm">
            Download the app for mobile
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10 w-auto cursor-pointer"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10 w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 
                        flex flex-col md:flex-row 
                        items-center justify-between 
                        text-sm text-gray-600">
          
          <p>© 2026 I-Store.com</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};
