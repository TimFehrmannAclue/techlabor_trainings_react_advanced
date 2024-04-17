import React from 'react';
import { Box, styled } from '@mui/material';

import Logo from '../../image/app_logo.svg';

const StyledLogo = styled(Box)(({ theme }) => ({
  // Appbar changes height based on screen width and this should adapt
  [theme.breakpoints.down('sm')]: {
    height: 46,
    width: 52,
  },
  [theme.breakpoints.up('sm')]: {
    height: 52,
    width: 52,
  },
  backgroundImage: `url(${Logo})`,
  backgroundRepeat: 'no-repeat',
}));

/**
 * Just some Logo for f.e. Navbar
 */
export default function AppLogo() {
  return (
    <StyledLogo />
  );
}
