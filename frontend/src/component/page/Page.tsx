import React, { ReactNode } from 'react';
import { Box, styled, SxProps } from '@mui/material';
import { useLocation } from 'react-router-dom';

import ROUTE_CONFIGS from '../../config/routeConfig';
import removeTransientProps from '../../util/react/removeTransientProps';

const StyledBox = styled(Box, removeTransientProps)<{ $isLoginPage: boolean }>(({ $isLoginPage, theme }) => ({
  width: '100%',
  // LoginPage is only Page without a Navbar
  height: $isLoginPage ? '100%' : 'calc(100% - 64px)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  overflow: 'hidden',
}));

interface IProps {
    children: ReactNode;
    sx?: SxProps;
}

/**
 * Contains the content elements (children) of Page component
 */
export default function Page({ children, sx }: IProps) {
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    <StyledBox
      id="Page"
      $isLoginPage={isLoginPage}
      sx={sx}
    >
      {children}
    </StyledBox>
  );
}
