import React from 'react';
import { Typography,  Container, Box, Grid, Divider, tableBodyClasses } from '@mui/material';
import contactImage from "@/assets/Contact us banner.png";

import Navbar from "@/components/Navbar"
import Footerbar from "@/components/Footerbar"

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
      <Navbar></Navbar>

      <main className='p-20'>
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
   <Container
  maxWidth={false}
  sx={{
    maxWidth: "1440px",
    px: 0,
    mb: 10,
    display: "flex",
    flexDirection: "column",
  }}
>
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
          padding: "20px",
        }}
      >
        
        <Box sx={{ width: "96px", height: "96px", flexShrink: 0 }}>
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=004c5a&color=fff`}
            alt={`${member.name} avatar`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Box>

     
        <Box sx={{ flex: 1, marginLeft: "24px" }}>
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
              mb: "4px",
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
    <Footerbar></Footerbar>
    </div>
  );
};

export default ContactUs;