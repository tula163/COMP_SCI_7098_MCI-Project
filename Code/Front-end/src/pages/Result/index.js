import React from "react";

import Navbar from "@/components/Navbar";
import Footerbar from "@/components/Footerbar"
import { useLocation } from "react-router-dom";
import { useSnackbarQueue } from "@/store/useSnackbarQueue";

const ResultPage = () => {
  const location = useLocation();
  const resultData = location.state; 

    const { showMessage } = useSnackbarQueue();
  
  const hashMarn = (marn) => {
    let sum = 0;
    for (let i = 0; i < marn.length; i++) {
      sum += marn.charCodeAt(i);
    }
    return sum % 100;
  };

  const mockData = [
    {
      marn: "1800328",
      funame: "Kumar Rahul",
      score: 0.9,
      language: "English",
      location: "SA",
      googleRating: 4.9,
      successRate: "over 81%",
      availability: "4 to 6 months",
      experienceYears: 7,
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACWAJYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAWMA=",
    },
    {
      marn: "1234567",
      funame: "Sarah Chen",
      score: 0.88,
      language: "Chinese",
      location: "NSW",
      googleRating: 4.7,
      successRate: "over 85%",
      availability: "2 to 4 months",
      experienceYears: 5,
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACWAJYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAWMA=",
    },
    {
      marn: "2345678",
      funame: "Michael Johnson",
      score: 0.85,
      language: "English",
      location: "VIC",
      googleRating: 4.5,
      successRate: "over 78%",
      availability: "3 to 5 months",
      experienceYears: 9,
      avatar:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACWAJYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAWMA=",
    },
  ];

  const displayData =
  resultData && resultData.length > 0 ? resultData : mockData;


  const formatScore = (score) => {
    return Math.round(score * 100);
  };


  const CornerBadge = ({ number, color }) => {
    return (
      <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="absolute top-0 left-0"
        >
          <polygon points="0,0 64,0 0,64" fill={color} />
          <text x="12" y="20" fill="white" fontSize="16" fontWeight="bold">
            {number}
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header  */}
    <Navbar></Navbar>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="flex gap-12  p-8 ">
          {/* Left - AI Image */}
          <div className="w-[500px] ml-[-40px]">
            <img
              src="/generate recommendation banner.jpg"
              alt="AI Brain Technology"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Description */}
          <div className="w-3/5 flex flex-col justify-center pl-8">
    

            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your recommended agents have been generated
            </h2>
            <div className="text-gray-700 space-y-3 text-lg leading-relaxed">
              <p>
                The following agents are the top 3 ones matching your
                preference.
              </p>
              <p>Click "Get contact" to get their contact information.</p>
              <p>Click "View agents" to view all agents.</p>
              <p>Hope you enjoy using our system.</p>
            </div>
          </div>
        </div>

        {/* Title with decorative lines  */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-black"></div>
          <div className="px-6">
            <span className="text-2xl font-bold text-slate-800">→</span>
          </div>
          <h3 className="px-6 text-3xl font-bold text-slate-800">
            Top 3 matching agents for you
          </h3>
          <div className="px-6">
            <span className="text-2xl font-bold text-slate-800">←</span>
          </div>
          <div className="flex-1 h-px bg-black"></div>
        </div>

        {/* Agent Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {displayData.map((agent, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border-2 border-cyan-700 p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-300"
            >
              {/* Corner Rank Badge  */}
              <CornerBadge
                number={index + 1}
                color={
                  index === 0 ? "#FCD34D" : index === 1 ? "#9CA3AF" : "#FB923C"
                }
              />

              {/* Agent Avatar */}
              <div className="flex justify-center mb-6 mt-4">
                <img
                src={`https://randomuser.me/api/portraits/men/${hashMarn(agent.marn)}.jpg`}
                alt={`${agent.funame} avatar`}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />

              </div>

              {/* Agent Info */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {agent.funame}
                </h4>
                <p className="text-gray-600 text-base mb-3">
                  MARN: {agent.marn}
                </p>
                <p className="text-xl font-bold text-gray-800">
                  Matching scores: {formatScore(agent.score)}%
                </p>
              </div>

              {/* Agent Details */}
              <div className="text-base text-gray-700 space-y-2 mb-8">
                <p>1. Location: {agent.location}</p>
                <p>2. Google rating: {agent.google_rating}</p>
                <p>3. Success rate: {agent.success_rate}</p>
                <p>4. Availability: {agent.availability}</p>
                <p>5. Experience years: {agent.experience_years}</p>
              </div>

              {/* Get Contact Button  */}
              <button
                onClick={() => {
                  let url = agent.website;
                  if (url && !url.startsWith("http")) {
                    url = "https://" + url;
                  }
                  url
                    ? window.open(url, "_blank")
                    : showMessage({ type: "error", message: "This agent does not have a website." });
                }}
                className="w-full bg-[#004c5a] text-white font-medium text-sm py-2.5 rounded-md hover:bg-[#003d4a] transition"
              >
                Get contact
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={() => (window.location.href = "/question")}
            className="bg-white border-2 border-gray-400 text-gray-700 font-semibold py-4 px-10 rounded-lg hover:bg-gray-50 hover:border-gray-500 transition-all duration-200 shadow-md"
          >
            Restart
          </button>
          <button
            onClick={() => (window.location.href = "/view")}
            className="bg-cyan-800 hover:bg-slate-800 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View agents
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footerbar></Footerbar>
    </div>
  );
};

export default ResultPage;
