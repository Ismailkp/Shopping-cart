import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${
      isActive ? 'bg-blue-700' : ''
    }`;

  return (
    <nav className="bg-blue-500 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">

          {/* Logo / Home */}
          <NavLink to="/" className="text-white font-bold text-lg">
            MyApp
          </NavLink>

          {/* Hamburger Button (Mobile Only) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4">
            <li><Search /></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
            <li><NavLink to="/cart" className={navLinkClass}>Cart</NavLink></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-2 pb-4">
            <li><Search /></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/login" className={navLinkClass}>Login</NavLink></li>
            <li><NavLink to="/cart" className={navLinkClass}>Cart</NavLink></li>
          </ul>
        )}
      </div>
    </nav>
  );
};
