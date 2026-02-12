import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';

export const Header = () => {
  // Common className function for active/inactive NavLink
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-white font-medium hover:bg-blue-600 transition ${
      isActive ? 'bg-blue-700' : ''
    }`;

  return (
    <nav className="bg-blue-500 shadow-md fixed top-0 left-0 right-0 gridgrid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-between h-12">
          <li>
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
          </li>
            <li>
            <Search/>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={navLinkClass}>Login</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={navLinkClass}>Cart</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
