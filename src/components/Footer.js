import React from 'react';
import { Box, Link } from '@mui/material';
import GitHub from '../assets/icons/github-logo.png'

const Footer = () => (
  <Box mt="60px" mb="60px" textAlign="center">
    <Link href="https://www.github.com/derrickdog" rel="noopener" target="_blank" underline="hover"  sx={{color: 'black'}}><img src={GitHub} alt="GitHub Logo" width="16px" /> Derrickdog</Link>
  </Box>
);

export default Footer;