"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Seller() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ff9a56] to-[#ffb366] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Admin Panel
        </h1>

        {isSignUp ? (
          <>
            <h2 className="text-xl font-semibold text-center text-gray-700">
              Create an Account
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={() => setIsSignUp(false)}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Sign Up
              </button>
              <p className="text-sm text-center text-gray-600">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignUp(false)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign In
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center text-gray-700">
              Welcome Back
            </h2>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={() => router.push("/seller/dashboard")}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Sign In
              </button>
              <p className="text-sm text-center text-gray-600">
                Don{"'"}t have an account?{" "}
                <span
                  onClick={() => setIsSignUp(true)}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
