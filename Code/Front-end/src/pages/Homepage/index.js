/* eslint-disable jsx-a11y/anchor-is-valid */
// Homepage.jsx

import React from "react";
// import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* Header */}
      <header className="w-full px-8 py-4 flex justify-between items-center text-sm bg-white/50 backdrop-blur-sm ">
        <div className="font-bold text-indigo-600">Logo</div>
        <nav className="flex gap-6 text-gray-700">
          <a href="#">Product</a>
          <a href="#">Features</a>
          <a href="#">Marketplace</a>
          <a href="#">Company</a>
        </nav>
        <a href="#" className="text-sm text-gray-700">Log in →</a>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4">
 
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4">
        Find the Right Migration Agent with AI
        </h1>
        <p className="text-center text-gray-600 max-w-xl mb-6">
        Our AI-powered recommendation system analyzes your needs and matches you with the most suitable, trustworthy agents — instantly and intelligently.
        </p>
        <div className="flex gap-4">
          <button className="px-5 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-500" onClick={() => navigate("/question")}>Get Your Match</button>
          {/* <Button onClick={() => router.push("/question")}>
      Get Your Match
    </Button> */}
          <button className="px-5 py-2 text-gray-700 hover:text-black">Learn more →</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-4 px-8 flex justify-between items-center text-sm text-gray-500">
        <div>© 2025 HA1 Group, Inc. All rights reserved.</div>
        <div className="flex gap-4 text-gray-500">
          <a href="#">📘</a>
          <a href="#">📸</a>
          <a href="#">𝕏</a>
          <a href="#">🐙</a>
          <a href="#">▶️</a>
        </div>
      </footer>
    </div>
  );
}