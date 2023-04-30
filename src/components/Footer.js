import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFFFFF">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '82px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '36px', xs: '28px' } }} mt="41px" textAlign="center" pb="40px">Made by Georgii Ignatov as a course project in HSE Nizhny Novgorod.</Typography>
  </Box>
);

export default Footer;
