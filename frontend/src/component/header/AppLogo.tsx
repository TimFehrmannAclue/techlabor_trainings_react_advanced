import React from 'react';
import { Box, styled } from '@mui/material';

import Logo from '../../image/app_logo.svg';

const Root = styled(Box)(({ theme }) => ({
  // Appbar changes height based on screen width and this should adapt
  [theme.breakpoints.down('sm')]: {
    height: 46,
  },
  [theme.breakpoints.up('sm')]: {
    height: 52,
  },
  paddingRight: theme.spacing(2),
}));

export default function AppLogo() {
  return (
    <Root
      component="img"
      // @ts-ignore This is correct
      src={Logo}
    />
  );
}
