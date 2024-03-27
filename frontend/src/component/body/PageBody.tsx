import React, { ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';

import ROUTE_CONFIGS from '../../config/routeConfig';
import removeTransientProps from '../../util/react/removeTransientProps';

const StyledBox = styled(Box, removeTransientProps)<{ $isLoginPage: boolean }>(({ $isLoginPage }) => ({
  position: 'absolute',
  height: $isLoginPage ? '100%' : 'calc(100% - 64px)',
  left: 0,
  width: '100%',
  textAlign: 'center',
  display: 'flex',
}));

interface IProps {
    children: ReactNode;
}

/**
 * Contains the content elements (children) of Page component
 */
export default function PageBody({ children }: IProps) {
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    <StyledBox
      id="PageBody"
      $isLoginPage={isLoginPage}
    >
      {children}
    </StyledBox>
  );
}
