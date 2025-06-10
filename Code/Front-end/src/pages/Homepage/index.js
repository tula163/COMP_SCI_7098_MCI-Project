/* eslint-disable jsx-a11y/anchor-is-valid */
// Homepage.jsx


import React from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "@/components/Navbar";
import Footerbar from "@/components/Footerbar"


export default function Homepage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* Header */}

      <Navbar></Navbar>
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
      <Footerbar></Footerbar>
    </div>
  );
}