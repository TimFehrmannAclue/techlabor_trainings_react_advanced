import React from 'react';
import {
  AppBar, styled, Toolbar, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { IRootState } from '../../state/store';
import { IRouteConfig } from '../../../type/route/IRouteConfig';
import ROUTE_CONFIGS from '../../config/routeConfig';

import AppLogo from './AppLogo';
import UserMenu from './UserMenu';
import PageHeaderName from './PageHeaderName';

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  '& > *': {
    flex: '1', // Make each child take up equal width
  },
}));

export default function CustomAppBar() {
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    isLoginPage ? null : (
      <AppBar position="static">
        <StyledToolbar>
          <AppLogo />
          <PageHeaderName />
          {isLoggedIn ? <UserMenu /> : null}
        </StyledToolbar>
      </AppBar>
    )
  );
}
