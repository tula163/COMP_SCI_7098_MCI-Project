import React, { useState, useEffect } from "react";
import agentImage from "@/assets/people image.png";
import searchIcon from "@/assets/search icon.png";
import filterIcon from "@/assets/filter icon.png";
import agentsData from "./agents.json";

export default function ViewAgents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [filteredAgents, setFilteredAgents] = useState(agentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showAvailabilityMenu, setShowAvailabilityMenu] = useState(false);

  const agentsPerPage = 12;

  const locations = Array.from(new Set(agentsData.map((a) => a.location))).sort();
  const availabilities = Array.from(
    new Set(agentsData.map((a) => a.availability))
  ).sort();

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase().trim();
    const result = agentsData.filter((agent) => {
      const matchSearch =
        keyword === "" ||
        agent.name.toLowerCase().includes(keyword) ||
        agent.marn.toString().includes(keyword);
      const matchLocation =
        locationFilter === "" || agent.location === locationFilter;
      const matchAvailability =
        availabilityFilter === "" || agent.availability === availabilityFilter;
      return matchSearch && matchLocation && matchAvailability;
    });
    setFilteredAgents(result);
    setCurrentPage(1);
  };

  useEffect(() => {
    handleSearch();
  }, [locationFilter, availabilityFilter]);

  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);
  const startIndex = (currentPage - 1) * agentsPerPage;
  const currentAgents = filteredAgents.slice(
    startIndex,
    startIndex + agentsPerPage
  );

  return (
    <div className="px-8 py-6 bg-[#f5f6f7] min-h-screen font-sans">
      <div className="flex flex-wrap gap-4 mb-10 items-center">
        <div className="w-[40%] relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search agents by their name or MARN"
            className="w-full pl-4 pr-10 py-2 border border-gray-400 rounded-md text-sm focus:outline-none"
          />
          <img
            src={searchIcon}
            alt="search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-[10%] bg-[#004c5a] text-white font-semibold py-2 text-sm rounded-md hover:bg-[#003d4a]"
        >
          Search
        </button>

        <div className="relative w-[23%]">
          <button
            onClick={() => setShowLocationMenu((prev) => !prev)}
            className="w-full flex justify-between items-center border border-gray-400 bg-white py-2 px-4 text-sm rounded-md hover:bg-gray-100"
          >
            <span>{locationFilter || "Filter by location"}</span>
            <img src={filterIcon} alt="filter" className="w-4 h-4" />
          </button>
          {showLocationMenu && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
              {locations.map((loc) => (
                <div
                  key={loc}
                  onClick={() => {
                    setLocationFilter(loc);
                    setShowLocationMenu(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {loc}
                </div>
              ))}
              <div
                onClick={() => {
                  setLocationFilter("");
                  setShowLocationMenu(false);
                }}
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                Clear filter
              </div>
            </div>
          )}
        </div>

        <div className="relative w-[23%]">
          <button
            onClick={() => setShowAvailabilityMenu((prev) => !prev)}
            className="w-full flex justify-between items-center border border-gray-400 bg-white py-2 px-4 text-sm rounded-md hover:bg-gray-100"
          >
            <span>{availabilityFilter || "Filter by availability"}</span>
            <img src={filterIcon} alt="filter" className="w-4 h-4" />
          </button>
          {showAvailabilityMenu && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
              {availabilities.map((term) => (
                <div
                  key={term}
                  onClick={() => {
                    setAvailabilityFilter(term);
                    setShowAvailabilityMenu(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {term}
                </div>
              ))}
              <div
                onClick={() => {
                  setAvailabilityFilter("");
                  setShowAvailabilityMenu(false);
                }}
                className="px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                Clear filter
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentAgents.length > 0 ? (
          currentAgents.map((agent) => (
            <div
              key={agent.id}
              className="border-2 border-blue-500 rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition w-full max-w-[300px] mx-auto"
            >
              <img
                src={agentImage}
                alt={agent.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-center text-lg font-bold text-gray-900">
                {agent.name}
              </h2>
              <p className="text-center text-gray-700 text-sm mb-3">
                MARN: {agent.marn}
              </p>
              <ul className="text-sm text-[#004c5a] list-decimal list-inside mb-4 leading-relaxed">
                <li>Location: {agent.location}</li>
                <li>Google rating: {agent.rating}</li>
                <li>Success rate: {agent.successRate}</li>
                <li>Availability: {agent.availability}</li>
              </ul>
              <button className="w-full bg-[#004c5a] text-white font-medium text-sm py-2.5 rounded-md hover:bg-[#003d4a] transition">
                Get contact
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-500 text-sm italic">
            No agents found.
          </p>
        )}
      </div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-2 text-sm text-gray-800">
        <p className="mr-4 font-medium">
          There are {filteredAgents.length} agents in total.
        </p>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-2 py-0 border border-blue-500 rounded text-lg hover:bg-gray-100"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages })
          .map((_, i) => i + 1)
          .filter((page) => {
            return (
              page === 1 ||
              page === totalPages ||
              Math.abs(page - currentPage) <= 1 ||
              page === 2 ||
              page === totalPages - 1
            );
          })
          .reduce((acc, page, idx, arr) => {
            if (idx > 0 && page !== arr[idx - 1] + 1) {
              acc.push("...");
            }
            acc.push(page);
            return acc;
          }, [])
          .map((item, index) =>
            item === "..." ? (
              <span key={`ellipsis-${index}`} className="px-2">
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`px-3 py-1 border border-blue-500 rounded ${
                  item === currentPage
                    ? "font-bold text-black"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            )
          )}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-2 py-0 border border-blue-500 rounded text-lg hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
        <span className="ml-4">Jump to page</span>
        <input
          type="number"
          min="1"
          max={totalPages}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const val = parseInt(e.target.value);
              if (!isNaN(val) && val >= 1 && val <= totalPages) {
                setCurrentPage(val);
                e.target.value = "";
              }
            }
          }}
          className="w-16 px-3 py-1 border border-blue-500 rounded text-center"
        />
      </div>
    </div>
  );
}
