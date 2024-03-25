import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactElement } from 'react';

import { IRootState } from '../../state/store';
import { setSnackbar } from '../../state/slice/snackbarSlice';
import ROUTE_CONFIGS from '../../config/routeConfig';

interface IProps {
    children: ReactElement;
}

/**
 * Redirects to /Login if not logged in
 */
export default function ProtectedRoute({ children }: IProps): ReactElement {
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  if (!isLoggedIn) {
    dispatch(setSnackbar({ text: 'Login benötigt', severity: 'warning' }));
    return <Navigate to={ROUTE_CONFIGS.INDEX.route} replace />;
  }

  return children;
}
