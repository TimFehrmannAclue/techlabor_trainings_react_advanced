import React from 'react';
import { AppBar, styled, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { IRootState } from '../../state/store';
import { IRouteConfig } from '../../../type/route/IRouteConfig';
import ROUTE_CONFIGS from '../../config/routeConfig';

import AppLogo from './AppLogo';
import UserMenu from './UserMenu';

export default function CustomAppBar() {
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    isLoginPage ? null : (
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <AppLogo />

          {isLoggedIn ? <UserMenu /> : null}
        </Toolbar>
      </AppBar>
    )
  );
}
