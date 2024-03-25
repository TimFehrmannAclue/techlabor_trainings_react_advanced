import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { store } from './state/store';
import GlobalSnackbar from './component/snackbar/GlobalSnackbar';
import CustomAppBar from './component/header/CustomAppBar';
import LoginRoute from './component/route/LoginRoute';
import LoginPage from './page/login/LoginPage';
import ProtectedRoute from './component/route/ProtectedRoute';
import MenuPage from './page/menu/MenuPage';
import AccountPage from './page/account/AccountPage';
import ROUTE_CONFIGS from './config/routeConfig';
import createDefaultTheme from './theme/createAppTheme';

export default function App(): ReactElement {
  const theme = createDefaultTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* Global State (Redux / RTK / RTK-Query) */}
      <Provider store={store}>
        <CssBaseline />

        {/* Global Alerts */}
        <GlobalSnackbar />

        <BrowserRouter>
          <CustomAppBar />
          <Routes>
            <Route
              path={ROUTE_CONFIGS.INDEX.route}
              element={<LoginRoute><LoginPage /></LoginRoute>}
            />

            {/* Logged in below */}
            <Route
              path={ROUTE_CONFIGS.MENU.route}
              element={(<ProtectedRoute><MenuPage /></ProtectedRoute>)}
            />

            {/* Logged in below */}
            <Route
              path={ROUTE_CONFIGS.ACCOUNT.route}
              element={(<ProtectedRoute><AccountPage /></ProtectedRoute>)}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
