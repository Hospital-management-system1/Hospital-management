"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [email, setEmail] = useState();
  const router = useRouter()

  useEffect(() => {
    fetch("http://localhost:3000/api/user/verifytoken")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .then((data) => {
        if (data?.error) {
          console.error(data.error);
        } else {
          const email = data; 
          console.log("User email:", email);
          setEmail(email);
        }
      })
      .catch((error) => {
        console.error(error);
        router.push("/logs/login");
      });
  }, []);
   
  return (
    <PostContext.Provider value={{ email }}>
      {children}
    </PostContext.Provider>
  );
};