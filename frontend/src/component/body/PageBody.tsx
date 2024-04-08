import React, { ReactNode } from 'react';
import { Box, styled, SxProps } from '@mui/material';
import { useLocation } from 'react-router-dom';

import ROUTE_CONFIGS from '../../config/routeConfig';
import removeTransientProps from '../../util/react/removeTransientProps';

const StyledBox = styled(Box, removeTransientProps)<{ $isLoginPage: boolean }>(({ $isLoginPage, theme }) => ({
  position: 'absolute',
  width: '100%',
  // LoginPage is only Page without a Navbar
  height: $isLoginPage ? '100%' : 'calc(100% - 64px)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

interface IProps {
    children: ReactNode;
    sx?: SxProps;
}

/**
 * Contains the content elements (children) of Page component
 */
export default function PageBody({ children, sx }: IProps) {
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    <StyledBox
      id="PageBody"
      $isLoginPage={isLoginPage}
      sx={sx}
    >
      {children}
    </StyledBox>
  );
}
