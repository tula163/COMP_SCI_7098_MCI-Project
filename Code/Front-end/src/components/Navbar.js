// src/components/Navbar.tsx

import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "View agents", path: "/view" },
  { label: "Generate recommendations", path: "/question" },
  { label: "Contact us", path: "/contact-us" },
];

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#002534",
        height: "80px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      }}
      
    >
      <Toolbar
        sx={{
          minHeight: "80px !important",
          display: "flex",
          justifyContent: "space-between",
          px: 0,
        }}
      >
        {/* Logo */}
        <Box className="pl-24 flex items-center h-full">
          <a
            href="/"
            className={`text-[30px] font-bold font-serif no-underline transition-colors duration-300 ${
              currentPath === "/" ? "text-[#8FE9FF]" : "text-white"
            }`}
          >
            AI-based Recommendation System
          </a>
        </Box>

        {/* Menu Items */}
        <Box className="flex gap-10 pr-24 items-center h-full">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <Button
                key={item.path}
                href={item.path}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  color: isActive ? "#8FE9FF" : "#FFFFFF",
                  transition: "color 0.3s ease",
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
