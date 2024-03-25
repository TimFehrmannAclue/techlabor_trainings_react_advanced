import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactElement } from 'react';

import { IRootState } from '../../state/store';
import ROUTE_CONFIGS from '../../config/routeConfig';

interface IProps {
    children: ReactElement;
}

/**
 * Redirects to Menu if already logged in
 */
export default function LoginRoute({ children }: IProps): ReactElement {
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={ROUTE_CONFIGS.MENU.route} replace />;
  }

  return children;
}
