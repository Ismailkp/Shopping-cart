// Footer.jsx
import React from "react";

export const Footer = () => {
  const footerLinks = {
    "ABOUT": ["Contact Us", "About Us", "Careers", "I-Store Stories", "Press", "I-Store Wholesale"],
    "HELP": ["Payments", "Shipping", "Cancellation & Returns", "FAQ", "Report Infringement"],
    "POLICY": ["Return Policy", "Terms Of Use", "Security", "Privacy", "Sitemap", "EPR Compliance"],
    "SOCIAL": ["Facebook", "Twitter", "YouTube", "Instagram"]
  };

  return (
    <footer className="bg-gray-100 text-gray-700 mt-6 rounded-lg shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="text-gray-900 font-semibold mb-3">{title}</h3>
            <ul className="space-y-1 text-sm">
              {links.map((link) => (
                <li key={link} className="hover:underline cursor-pointer">{link}</li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-gray-900 font-semibold mb-3">EXPERIENCE I-Store APP</h3>
          <p className="mb-2 text-sm">Download the app for mobile</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8"/>
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8"/>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-center py-3 text-sm text-gray-600 rounded-b-lg">
        © 2026 I-Store.com
      </div>
    </footer>
  );
};

