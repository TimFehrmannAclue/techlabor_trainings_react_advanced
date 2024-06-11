import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactElement } from 'react';

import { IRootState } from '../../state/store';
import ROUTE_CONFIGS from '../../config/routeConfig';

interface IProps {
    children: ReactElement;
}

/**
 * Redirects to Menu if already logged in (Also called Guard)
 */
export default function LoginRoute({ children }: IProps): ReactElement {
  // Access the global redux-toolkit state, select the loginSlice and then the isLoggedIn field
  // ToDo 2.7 retrieve isLoggedIn from loginSlice
  const isLoggedIn = false;

  // Redirect to MenuPage due to logged in
  if (isLoggedIn) {
    console.info('LoginRoute - redirect to MenuPage as user is loggin in')
    return <Navigate to={ROUTE_CONFIGS.MENU.route} replace />;
  }

  // Continue to page wrapped in LoginRoute
  return children;
}
