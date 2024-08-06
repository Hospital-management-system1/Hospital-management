"use client"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const postAdmin = async () => {
//     let data = {
//       name,
//       email,
//       password,
//     };
//     try {
//       const response = await fetch("http://localhost:5999/postAdmin", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
//       if (response.ok) {
//         setMessage("Registration successful!");
//         setTimeout(() => {
//           navigate("/");
//         }, 2000); // Redirect to login after 2 seconds
//       } else {
//         setMessage(result.Error || "Registration failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error registering admin:", error);
//       setMessage("Error: Unable to register.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postAdmin();
//   };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1502740479091-635887520276?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          Sign Up
        </h2>
        <form className="space-y-6" >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
            <p className="text-sm text-gray-600">
              Already have an account?
              {/* <Link to="/" className="ml-1 text-indigo-600 hover:underline">
                Login here
              </Link> */}
            </p>
          </div>
        </form>
        {/* {message && (
          <div className="mt-2 ml-4 text-center text-red-500">{message}</div>
        )} */}
      </div>
    </div>
  );
};

export default RegistrationForm;
