'use client';

import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsAuthenticated, selectUserFirstName } from "../store/features/userSlice";
import { UserCircle } from "lucide-react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast';
import { logout } from "../store/features/userSlice"; // Assuming you have a logout action

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userFirstName = useSelector(selectUserFirstName);
  const greeting = isAuthenticated ? `Hello, ${userFirstName}` : "Welcome, Guest";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 1000); 
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(logout()); 
    setDropdownOpen(false); 
    toast.success("Logged out successfully!");
  };

  return (

    <nav className="bg-gray-900 text-white shadow sticky top-0 z-50  rounded-t-md p-1">
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
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
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
