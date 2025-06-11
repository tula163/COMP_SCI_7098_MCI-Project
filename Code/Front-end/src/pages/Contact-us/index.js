import React from 'react';
import { Typography,  Container, Box } from '@mui/material';
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
    
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#dde9ee] via-[#f4f7fa] to-[#e2f3ee]">
      {/* Header */}
      <Navbar></Navbar>
     <Container maxWidth="lg" className='h-full mb-6' >
     
        {/* Banner Section */}
        <section className="w-full bg-[#FFFFFF] flex justify-center mb-6">
  <div
    className="flex w-full max-w-[1156px] h-[350px]" 
    style={{ minHeight: "350px" }}
  >
    {/* left part */}
    <div className="w-1/2 h-full">
      <img
        src={contactImage}
        alt="Team Collaboration"
        className="w-full h-full object-cover"
      />
    </div>
    {/* right part */}
    <div
      className="w-1/2 flex justify-center items-center text-center"
      style={{
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
{/* title */}
<Box sx={{ display: "flex", alignItems: "center", mb: 4, mt: 2, ml: "70px" }}>
  <Box sx={{ width: "8px", height: "32px", bgcolor: "#004c5a", borderRadius: "4px", mr: 2 }} />
  <Typography
    sx={{
      fontSize: "32px",
      fontWeight: 800,
      fontFamily: "Inter, sans-serif",
      color: "#004c5a",
      letterSpacing: 1,
    }}
  >
    Team members
  </Typography>
</Box>

{/* card */}
<Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    rowGap: "24px",
    columnGap: "48px",
    px: "70px",
    justifyContent: "flex-start",
  }}
>
  {teamMembers.map((member, idx) => (
    <Box
      key={idx}
      sx={{
        width: { xs: "100%", md: "calc(50% - 24px)" },
        minWidth: 300,
        height: "160px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        boxShadow: "0px 2px 12px rgba(0,0,0,0.10)",
        padding: "24px",
        transition: "box-shadow 0.2s",
        ":hover": { boxShadow: "0px 6px 24px rgba(0,0,0,0.12)" }
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
      <Box sx={{ flex: 1, marginLeft: "32px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            color: "#002534",
            mb: "6px",
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Inter, sans-serif",
            color: "#555",
            mb: "2px",
          }}
        >
          Student ID: {member.studentId}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "Inter, sans-serif",
            color: "#7c8b95",
          }}
        >
          {member.email}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>



 
      </Container>

    {/* Footer */}
    <Footerbar></Footerbar>
    </div>
  );
};

export default ContactUs;