'use client';

import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUserFirstName } from "../store/features/userSlice";
import { UserCircle } from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userFirstName = useSelector(selectUserFirstName);
  const greeting = isAuthenticated ? `Hello, ${userFirstName}` : "Welcome, Guest";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); 
  };

  return (
    <nav className="bg-gray-900 text-white shadow sticky top-0 z-50 border-b rounded-t-md ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left: Brand + Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-xl font-bold text-green-400 hover:text-green-300">
            Food-Rest-Startup
          </Link>
          <Link href="/seller" className="hover:text-gray-300">Seller</Link>
          <Link href="/products" className="hover:text-gray-300">All Products</Link>
        </div>

        {/* Right: Auth / Profile Section */}
        <div className="flex items-center space-x-6 relative">

          <div>
            <span className="
            text-sm text-gray-300 font-semibold"
              >{greeting}</span>
          </div>

          <Link href="/cart" className="hover:text-gray-300">Cart</Link>

          {!isAuthenticated ? (
            <Link href="/login" className="hover:text-gray-300">Login</Link>
          ) : (
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Profile Icon */}
              <button className="hover:text-gray-300 flex items-center">
                <UserCircle size={28} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-25 bg-white text-gray-900 rounded shadow-lg z-50">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-blue-200">Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 hover:bg-green-100">Orders</Link>
                  <Link href="/logout" className="block px-4 py-2 text-red-600 hover:bg-red-100">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
