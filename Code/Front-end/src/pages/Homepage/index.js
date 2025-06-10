/* eslint-disable jsx-a11y/anchor-is-valid */
// Homepage.jsx


import React , { useState, useEffect }from "react";
import { useNavigate } from 'react-router-dom';
import homeBanner from "@/assets/home page banner.png";

import { useSnackbarQueue } from "@/store/useSnackbarQueue";
import Navbar from "@/components/Navbar";
import Footerbar from "@/components/Footerbar"
import { getAgentsAll } from "@/api/requireApi";




export default function Homepage() {
    const navigate = useNavigate();
      const [searchTerm, setSearchTerm] = useState("");
    const { showMessage } = useSnackbarQueue();

      const [cardData, setCardData] =  useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      // setLoading(true); 
      try {
        const res = await getAgentsAll({q:searchTerm});

        console.log(res,"res");
        setCardData(res.slice(0, 24))

      } catch (err) {
        showMessage({ type: "error", message: "Failed to fetch agents" });
      } finally{
        // setLoading(false);
      }
    };

    fetchAgents();
  }, [searchTerm]);

  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* Header */}

      <Navbar></Navbar>
      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-3/6">
            <img
              src={homeBanner}
              alt="World map wordcloud"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-4/5 relative z-10 lg:-ml-20 lg:mt-0 flex flex-col justify-center items-center text-center p-6 bg-white rounded-xl shadow-lg">
            {/* Decorative Lines */}
            <div className="absolute top-4 left-4">
              <div className="w-20 h-1 bg-cyan-700 mb-2" />
              <div className="w-1 h-32 bg-cyan-700" />
            </div>

            {/* Text Content */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 whitespace-nowrap">
              Find Migration Agents with AI
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Simple questions, easy choices, quick matches
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Over 4000 agents for you
            </p>
            <button
              onClick={() => navigate('/question')}
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 shadow-md"
            >
              Get Your Match
            </button>
          </div>
        </div>

        {/* Search and View More */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search agents by their name or MARN"
              className="w-full border border-gray-300 rounded-full py-3 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              🔍
            </span>
          </div>
          <button
            onClick={() => navigate('/view')}
            className="bg-cyan-800 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 shadow-md"
          >
            Find more agents
          </button>
        </div>
        {/* Agent Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((agent,index) => (
            <div key={agent.marn} className="bg-white rounded-2xl border-2 border-cyan-700 p-6 text-center shadow hover:shadow-md">
                 <img
                src={`https://randomuser.me/api/portraits/men/${index}.jpg`}
                alt={`${agent.full_name} avatar`}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{agent.full_name}</h3>
              <p className="text-gray-600 mb-4">MARN: {agent.marn}</p>
              <ul className="text-left text-gray-700 text-sm space-y-1 mb-6">
                <li>1. Location: {agent.location}</li>
                <li>2. Google rating: {agent.google_rating}</li>
                <li>3. Success rate: {agent.success_rate}</li>
                <li>4. Availability: {agent.availability}</li>
              </ul>
              <button
                onClick={() =>
                  agent.website
                    ? window.open(agent.website, "_blank")
                    :   showMessage({ type: "error", message: "This agent does not have a website." })
                }
                className="w-full bg-[#004c5a] text-white font-medium text-sm py-2.5 rounded-md hover:bg-[#003d4a] transition"
              >
                Get contact
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footerbar></Footerbar>
    </div>
  );
}