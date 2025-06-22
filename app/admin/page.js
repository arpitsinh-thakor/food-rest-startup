"use client";
import { useState } from "react";

export default function Admin() {

    const [isSignUp, setIsSignUp] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
            
            {
                isSignUp ? (
                    
                    <div className="flex flex-col justify-center space-y-4">
                        <h1
                            className="text-2xl font-bold mb-4 flex flex-col items-center"
                            >Sign Up</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="p-2 border rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 border rounded"
                        />
                        <button
                            onClick={() => setIsSignUp(false)}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Sign Up
                        </button>
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <span
                                onClick={() => setIsSignUp(false)}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Sign In
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center space-y-4">
                        <h1
                            className="text-2xl font-bold mb-4 flex flex-col items-center"
                            >Sign In</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-2 border rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-2 border rounded"
                        />
                        <button
                            onClick={() => setIsSignUp(true)}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
                        >
                            Sign In
                        </button>
                        <p className="text-sm text-gray-500">
                            Don{"'"}t have an account?{" "}
                            <span
                                onClick={() => setIsSignUp(true)}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                    
                )
            }
            
        </div>
    );
}