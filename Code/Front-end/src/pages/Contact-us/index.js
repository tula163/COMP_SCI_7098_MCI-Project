import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Avatar, Box, Grid, Divider, tableBodyClasses } from '@mui/material';
import contactImage from "@/assets/Contact us banner.png";
import agentImage from "@/assets/people image.png";

const teamMembers = [
  {
    name: 'Jianghao Jin',
    studentId: 'a1880849',
    email: 'jianghao.jin@student.adelaide.edu.au',
  },
  {
    name: 'Jianing Dang',
    studentId: 'a1882117',
    email: 'jianing.dang@student.adelaide.edu.au',
  },
  {
    name: 'Manhong Chen',
    studentId: 'a1904387',
    email: 'manhong.chen@student.adelaide.edu.au',
  },
  {
    name: 'Zihan Luo',
    studentId: 'a1916700',
    email: 'zihan.luo@student.adelaide.edu.au',
  },
  {
    name: 'Ziyan Zhao',
    studentId: 'a1883303',
    email: 'ziyan.zhao@student.adelaide.edu.au',
  },
];

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-grow">
        {/* Banner Section */}
        <section className="w-full bg-[#FFFFFF] flex justify-center mb-6" style={{ height: "350px" }}>
          <div
            className="flex"
            style={{
              width: "1256px",
              height: "350px",
            }}
          >
            {/* left part*/}
            <div 
              style={{
                width: "600px",
                height: "350px",
                marginLeft: "0px",
              }}
            >
              <img
                src={contactImage} 
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* right part */}
            <div
              className="flex justify-center items-center text-center"
              style={{
                width: "656px",
                height: "350px",
                borderRight: "10px solid #6AA6B9",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div>
                <h2
                className="mb-4 font-black"
                style={{
                  fontSize: '40px',
                  fontFamily: 'Inter, sans-serif',
                  color: '#002534',
                }}
                >
                  Master of Innovation and Computing Project
                </h2>
                <p
                  className="mb-1"
                  style={{ fontSize: '24px', color: '#002534', fontFamily: 'Inter, sans-serif' }}
                >
                  University of Adelaide
                </p>
                <p
                  className="mb-1"
                  style={{ fontSize: '24px', color: '#002534', fontFamily: 'Inter, sans-serif' }}
                >
                  Team: HA1
                </p>
                <p
                  className="mb-1"
                  style={{ fontSize: '24px', color: '#002534', fontFamily: 'Inter, sans-serif' }}
                >
                  Supervisor: Hussain Ahmad
                </p>
                <p
                  style={{ fontSize: '24px', color: '#002534', fontFamily: 'Inter, sans-serif' }}
                >
                  Project: AI-based Recommendation System
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <Container maxWidth={false} sx={{ maxWidth: "1440px", px: 0, mb: 10, display: "flex", flexDirection: "column",}}>
          <Typography 
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: 800,
              fontFamily: "Inter, sans-serif",
              color: "#002534",
              mb: 4,
              ml: "96px", 
            }}
            >
            Team members
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              rowGap: "20px",
              columnGap: "48px",
              px: "70px", 
            }}
          >
            {teamMembers.map((member, idx) => (
              <Box
                key={idx}
                sx={{
                  width: "600px",
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "8px",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                  pl: "30px",
                  pr: "24px",
                }}
              >
                <Avatar
                  src={agentImage}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ marginLeft: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                      color: "#000000",
                      mb: "4px",
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Inter, sans-serif",
                      color: "#000000",
                    }}
                  >
                    Student ID: {member.studentId}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontFamily: "Inter, sans-serif",
                      color: "#000000",
                    }}
                  >
                    {member.email}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </main>

      {/* Footer */}
      <footer className="bg-[#072C3F] text-white text-[14px] leading-[20px] py-2 pl-[30px] text-left">
        © 2025 HA1 Group, Project for Master of Computing and Innovation
      </footer>
    </div>
  );
};

export default ContactUs;