import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '200px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#003896" fontWeight="600" fontSize="50px">HSE Fitness Club <br /> Nizhny Novgorod</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      HSE Fitness allows you to view a wide range <br />
      of exercises for all groups of muscles. <br />
      Have fun and stay strong!       
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#003896', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#003896" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
