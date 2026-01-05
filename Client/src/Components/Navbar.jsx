import React from "react";
import { Link } from "react-router-dom";
import Paw from '../Images/Paw.png';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f8f1e7] border-b border-[#e6dccd]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Paw}
            alt="Paw'n-hoof"
            className="h-20"
          />
        </Link>

        {/* Center - Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-orange-600 transition">Home</Link></li>
          <li><Link to="/adopt" className="hover:text-orange-600 transition">Adopt</Link></li>
          <li><Link to="/donation" className="hover:text-orange-600 transition">Donation</Link></li>
          <li><Link to="/stories" className="hover:text-orange-600 transition">Story</Link></li>
          <li><Link to="/newsletter" className="hover:text-orange-600 transition">Newsletter</Link></li>
          <li><Link to="/contact" className="hover:text-orange-600 transition">ContactUs</Link></li>
        </ul>

        {/* Right - Button */}
        <Link to="/login" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
