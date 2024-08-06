"use client"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { email, password };

    axios.defaults.withCredentials = true;

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",  
        data
      );

      if (res.data.Status === "Success") {
        // Redirect to dashboard or home page after successful login
        router.push("/home"); 
      } else {
        alert("Error: " + res.data.Error);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" 
    style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1516575901726-efcb7a9895a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg"  style={{
      backgroundImage: "url(https://images.unsplash.com/photo-1516841273335-e39b37888115?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aGNhcmUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDI%3D)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    }} >
        <h2 className="text-3xl font-bold text-center text-indigo-600">Login</h2>
        <form className="space-y-6" onSubmit={handleSubmit}  >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}              
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value )}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 btn btn-primary text-semibold text-lg"
          >
            LOGIN
          </button>
        </form>
        <p className="mt-4 text-center font-bold text-black">
          Don't have an account?{" "}
          {/* <Link to="/register" className="text-indigo-600  hover:underline">
            Register here
          </Link> */}
        </p>
      </div>
    </div>
  );
};

export default Login;
