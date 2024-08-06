"use client"
import React, { useContext } from "react";
import { PostContext } from "./context/PostContext";
export default function Home() {
  
  const { email } = useContext(PostContext);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{email}</h1>
    </main>
  );
}
