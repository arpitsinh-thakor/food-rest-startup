'use client';

import Link from "next/link";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../store/features/userSlice";
import { UserCircle } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow sticky top-0 z-50">
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
          <Link href="/cart" className="hover:text-gray-300">Cart</Link>

          {!isAuthenticated ? (
            <Link href="/login" className="hover:text-gray-300">Login</Link>
          ) : (
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Profile Icon */}
              <button className="hover:text-gray-300 flex items-center">
                <UserCircle size={28} />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded shadow-lg z-50">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100">Orders</Link>
                  <Link href="/logout" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</Link>
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
