"use client"
import { useState } from "react";
import axios from "axios";
const { useRouter } = require("next/navigation");

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/features/userSlice";

export default function Login() {

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);


    const saveUser = ({id, firstName, lastName, email}) => {
        const user = {
            id,
            firstName,
            lastName,
            email,
        };
        dispatch(setUser(user));
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {

            if (!email || !password) {
                setError("Email and Password are required");
                return;
            }
            saveUser({
                id:  "12345",
                firstName: firstName || "John",
                lastName: lastName || "Doe",
                email:  email || "johndoe_signin@gmail.com",
            })
            // const response = await axios.post("/api/login", {
            //     email,
            //     password,
            
            // });
            // if (response.status === 200) {
            //     console.log("Login successful", response.data);
                
            //     saveUser(response.data);

            //     router.push("/");
            // }
            
        } catch (err) {
            setError(err.message);
        }
    }
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {

            saveUser({
                id:  "12345",
                firstName: firstName || "John",
                lastName: lastName || "Doe",
                email:  email || "johndoe_signup@gmail.com"
            })
            if (!firstName || !lastName || !email || !password) {
                setError("All fields are required");
                return;
            }
            // const response = await axios.post("/api/signup", {
            //     firstName,
            //     lastName,
            //     email,
            //     password,
            //     confirmPassword
            // });
            // if (response.status === 200) {
            //     console.log("SignUp successful", response.data);
            //     // Dispatch login action to Redux store
                
            //     saveUser(response.data);

            //     router.push("/");
            // }
        }
          catch (err) {
            setError(err.message);
          }
    }

    return (
        <div
          className="flex flex-col  w-1/2 mx-auto p-5 bg-gray-800 rounded-md shadow-lg"
        >
          <h1
            className="text-center text-4xl font-bold text-white mb-5"
            >{isLoginForm ? "SignIn" : "SignUp"}</h1>
          <form
            className="flex flex-col items-center bg-gray-700 p-5 rounded-md shadow-md "
            >
            { !isLoginForm && <>
                <input
                  className="border border-gray-300 rounded-md p-2 mb-2 w-2/3"
                  placeholder="First Name" required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="border border-gray-300 rounded-md p-2 mb-2 w-2/3"
                  placeholder="Last Name" required
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </>
            }
            <input
              className="border border-gray-300 rounded-md p-2 mb-2 w-2/3"
              placeholder="Email" required autoFocus
              autoComplete="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 rounded-md p-2 mb-2 w-2/3"
              placeholder="Password"  required
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showpasswordtoggle= "true"
            />
            { !isLoginForm && 
              <input
                className="border border-gray-300 rounded-md p-2 mb-2 w-2/3"
                placeholder="Confirm Password" required
                autoComplete="current-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                showpasswordtoggle= "true"
              />
            }
            <button
              className="bg-blue-500 text-white p-2 rounded-md w-2/3 hover:bg-blue-600 transition-colors cursor-pointer"
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