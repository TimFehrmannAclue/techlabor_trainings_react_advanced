import React from 'react';
import { AppBar, styled, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { IRootState } from '../../state/store';
import { IRouteConfig } from '../../../type/route/IRouteConfig';
import ROUTE_CONFIGS from '../../config/routeConfig';

import AppLogo from './AppLogo';
import BurgerMenu from './BurgerMenu';
import UserMenu from './UserMenu';

const Root = styled(AppBar)(({ }) => ({}));

export const APP_BAR_ROUTE_CONFIG: IRouteConfig[] = [
  ROUTE_CONFIGS.INDEX,
  ROUTE_CONFIGS.MENU,
];

export default function CustomAppBar() {
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);
  const isLoginPage = useLocation().pathname === ROUTE_CONFIGS.INDEX.route;

  return (
    isLoginPage ? null : (
      <Root position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <BurgerMenu pageRouteConfigs={APP_BAR_ROUTE_CONFIG} />
          <AppLogo />

          {isLoggedIn ? <UserMenu /> : null}
        </Toolbar>
      </Root>
    )
  );
}
