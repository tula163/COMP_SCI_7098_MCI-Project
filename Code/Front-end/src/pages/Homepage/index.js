/* eslint-disable jsx-a11y/anchor-is-valid */
// Homepage.jsx

import React from "react";
// import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Box, Grid, Divider } from '@mui/material';


export default function Homepage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* Header */}
      <AppBar 
        position="static" 
        sx={{
          backgroundColor: "#002534",
          height: "100px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // shaddow's y=4px, blur 4px
        }}
        >
        <Toolbar 
          sx={{
            minHeight: "100px !important",
            px: 0, // remove left and right padding
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ pl: "96px" }}> 
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontFamily: "Newsreader, serif",
                fontWeight: "bold",
                color: "#8FE9FF",
                fontSize: "30px", 
                textDecoration: "none",
              }}
            >
              AI-based Recommendation System
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "40px", // distance between buttons
              pr: "96px",
            }}
          >
            <Button href="/view" sx={{ color: "#FFFFFF", textTransform: "none", fontSize: "20px", fontFamily: "Inter, sans-serif", fontWeight: 500,}}>View agents</Button>
            <Button href="/question" sx={{ color: "#FFFFFF", textTransform: "none", fontSize: "20px", fontFamily: "Inter, sans-serif",fontWeight: 500,}}>Generate recommendations</Button>
            <Button href="/contact-us" sx={{ color: "#FFFFFF", textTransform: "none", fontSize: "20px", fontFamily: "Inter, sans-serif",fontWeight: 500,}}>Contact us</Button>
          </Box>
        </Toolbar>
      </AppBar>

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
      <footer className="bg-[#072C3F] text-white text-[14px] leading-[20px] py-2 pl-[30px] text-left">
        © 2025 HA1 Group, Project for Master of Computing and Innovation
      </footer>
    </div>
  );
}