import React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import ROUTE_CONFIGS from '../../config/routeConfig';

export default function PageHeaderName() {
  const { pathname } = useLocation();
  const routeConfig = Object.values(ROUTE_CONFIGS)
    .find((config) => config.route === pathname);

  return <Typography sx={{ textAlign: 'center' }}>{routeConfig?.name ?? '404 - Page not found'}</Typography>;
}
