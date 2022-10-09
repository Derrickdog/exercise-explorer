import React from 'react'
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/weights.jpeg'

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '50px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontSize="50px" fontWeight="700">Exercise Explorer</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '28px', xs: '40px' } }} mb="23px" mt="30px">
        Browse and Search
        <br />Exercises
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Choose from thousands of exercises
        <br />with included descriptions and videos
      </Typography>
      <Button variant="contained" href="#categories" sx={{ backgroundColor: "#FF2625" }}>Browse Exercises</Button>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '140px' }}>
        Explore
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner