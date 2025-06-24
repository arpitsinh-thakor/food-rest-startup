"use client"
import { useState } from "react";
import axios from "axios";
const { useRouter } = require("next/navigation");

export default function Login() {

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {

            if (!email || !password) {
                setError("Email and Password are required");
                return;
            }
            const response = await axios.post("/api/login", {
                email,
                password
            });
            if (response.status === 200) {
                console.log("Login successful", response.data);
                router.push("/");
            }
            
        } catch (err) {
            setError(err.message);
        }
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (!firstName || !lastName || !email || !password) {
                setError("All fields are required");
                return;
            }
            const response = await axios.post("/api/signup", {
                firstName,
                lastName,
                email,
                password
            });
            if (response.status === 200) {
                console.log("SignUp successful", response.data);
                router.push("/");
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div
          className="flex flex-col "
        >
          <h1
            className="text-center text-4xl font-bold text-white mt-10 mb-5"
            >{isLoginForm ? "SignIn" : "SignUp"}</h1>
          <form
            className="flex flex-col items-center"
            >
            { !isLoginForm && <>
                <input
                  className="border border-gray-300 rounded-md p-2 mb-2 w-1/4"
                  placeholder="First Name" required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="border border-gray-300 rounded-md p-2 mb-2 w-1/4"
                  placeholder="Last Name" required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            }
            <input
              className="border border-gray-300 rounded-md p-2 mb-2 w-1/4"
              placeholder="Email" required autoFocus
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-2 w-1/4"
              placeholder="Password"  required
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md w-1/4 hover:bg-blue-600 transition-colors cursor-pointer"
              type="submit"
              onClick={isLoginForm ? handleSignIn : handleSignUp}
              >{isLoginForm ? "SignIn" : "SignUp"}</button>

            <p
              className="text-blue-500 mt-2 cursor-pointer"
              onClick={() => setIsLoginForm(!isLoginForm)}
              >{isLoginForm ? "Don't have an account." : "Already have an account?"}
              </p>
            
            {error && <div
              className="text-red-500 mt-2"
              > Error - {error}</div>
            }
          </form>
        </div>
    );
}