import React, { useState, useEffect } from "react";
import searchIcon from "@/assets/search icon.png";
import filterIcon from "@/assets/filter icon.png";
import { getAgentsWithPage } from "@/api/requireApi";
import { useSnackbarQueue } from "@/store/useSnackbarQueue";
import PaginationBar from "./PaginationBar";
import { Box, Typography ,CircularProgress,Container} from "@mui/material";
import Navbar from "@/components/Navbar";

const locations =["NSW","VIC","QLD","SA","WA","TAS","ACT","NT"]

const availabilities = [
  "Immediately",
  "1 month",
  "2 - 3 month",
  "4 - 6 month"
];

const PAGE_SIZE = 12;

export default function ViewAgents() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showAvailabilityMenu, setShowAvailabilityMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
    q: "",
    location: "",
    availability: ""
  });

  const [agentData, setAgentData] = useState({
    total: 0,
    current: 1,
    pageSize: PAGE_SIZE,
    results: [],
    next: null,
    previous: null
  });

  const { showMessage } = useSnackbarQueue();

  // Search 
  const handleSearch = () => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      q: searchTerm.trim(),
      location: locationFilter,
      availability: availabilityFilter
    }));
  };

  // locationFilter / availabilityFilter change
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      page: 1,
      q: searchTerm.trim(),
      location: locationFilter,
      availability: availabilityFilter
    }));
  }, [locationFilter, availabilityFilter]);

  // request
  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true); 
      try {
        const res = await getAgentsWithPage(filters);

        const getCurrentPage = (url) => {
          if (!url) return null;
          const params = new URLSearchParams(url.split("?")[1]);
          return parseInt(params.get("page")) || null;
        };

        const currentPage = filters.page || getCurrentPage(res.config.url) || 1;

        setAgentData({
          total: res.count,
          current: currentPage,
          pageSize: PAGE_SIZE, 
          next: res.next,
          previous: res.previous,
          results: res.results
        });
      } catch (err) {
        showMessage({ type: "error", message: "Failed to fetch agents" });
      } finally{
        setLoading(false);
      }
    };

    fetchAgents();
  }, [filters,showMessage]);

  // avator
  const hashMarn = (marn) => {
    let sum = 0;
    for (let i = 0; i < marn.length; i++) {
      sum += marn.charCodeAt(i);
    }
    return sum % 100;
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="px-8 py-6 bg-gradient-to-b from-[#e6edf3] via-[#f7f8fa] to-[#f7e7ed] min-h-screen font-sans">
      
      {/* search */}

      <div className="flex flex-wrap gap-4 mb-10 items-center  max-w-7xl  mx-auto ">
        <div className="w-[40%] relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search agents by their name or MARN"
            className="w-full pl-4 pr-10 py-4 border border-gray-400 rounded-md text-sm focus:outline-none"
          />
          <img
            src={searchIcon}
            alt="search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-70"
          />
        </div>
        <button
          onClick={handleSearch}
          className="w-[10%] bg-[#004c5a] text-white font-semibold py-4 text-sm rounded-md hover:bg-[#003d4a]"
        >
          Search
        </button>

        {/* Location filter */}
        <div className="relative w-[23%]">
          <button
            onClick={() => setShowLocationMenu((prev) => !prev)}
            className="w-full flex justify-between items-center border border-gray-400 bg-white py-4 px-4 text-sm rounded-md hover:bg-gray-100"
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
                className="px-4 py-4 text-sm text-gray-500 hover:bg-gray-100 cursor-pointer"
              >
                Clear filter
              </div>
            </div>
          )}
        </div>

        {/* Availability filter */}
        <div className="relative w-[23%]">
          <button
            onClick={() => setShowAvailabilityMenu((prev) => !prev)}
            className="w-full flex justify-between items-center border border-gray-400 bg-white py-4 px-4 text-sm rounded-md hover:bg-gray-100"
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

      {/* main */}
      <div className="flex-1 max-w-7xl mx-auto px-8 ">
      {loading ? (
  <Box className="w-full h-[calc(100vh-200px)] flex items-center justify-center">
    <CircularProgress />
  </Box>
) : (
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {agentData.results.length > 0 ? (
          agentData.results.map((agent) => (
            <div
              key={agent.id}
              className="border-2 border-cyan-700  rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition w-full max-w-[300px] mx-auto"
            >
              <img
                src={`https://randomuser.me/api/portraits/men/${hashMarn(agent.marn)}.jpg`}
                alt={`${agent.full_name} avatar`}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-center text-lg font-bold text-gray-900">
                {agent.full_name}
              </h2>
              <p className="text-center text-gray-700 text-sm mb-3">
                MARN: {agent.marn}
              </p>
              <ul className="text-sm text-[#004c5a] list-decimal list-inside mb-4 leading-relaxed">
                <li>Location: {agent.location}</li>
                <li>Google rating: {agent.google_rating}</li>
                <li>Success rate: {agent.success_rate}</li>
                <li>Availability: {agent.availability}</li>
              </ul>
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
          ))
        ) : (
          <Box className="col-span-full h-[calc(100vh-164px)] w-full flex flex-col items-center justify-center py-16">
            <Typography variant="h6" color="textSecondary" gutterBottom>
              😕 No agents found
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Try a different keyword or remove filters.
            </Typography>
          </Box>
        )}
      </div>  

)}
  </div>
      {agentData.total > 0 && (
        <PaginationBar
          total={agentData.total}
          current={filters.page}
          pageSize={ PAGE_SIZE}
          onPageChange={(page) => {
            setFilters((prev) => ({ ...prev, page }));
          }}
        />
      )}
 
    </div>
    </>
  );
}
