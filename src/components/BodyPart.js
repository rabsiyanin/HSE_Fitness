import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    

    sx={bodyPart === item ? { borderTop: '4px solid #003896', 
    background: '#fff', borderBottomLeftRadius: '20px', 
    width: '360px', height: '82px', cursor: 'pointer', gap: '10px' } 

    : { 
        background: '#fff', borderBottomLeftRadius: '20px', 
        width: '270px', height: '82px', 
        cursor: 'pointer', gap: '17px' }}
    

    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
   <Typography fontWeight={600} color="#003896" sx={{ opacity: '1', display: { lg: 'block', xs: 'none' }, fontSize: '40px' }} > {item}</Typography>
  </Stack>
);

export default BodyPart;
