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
 * Redirects to /Login if not logged in (Also called Guard)
 */
export default function ProtectedRoute({ children }: IProps): ReactElement {
  // Access the global redux-toolkit state, select the loginSlice and then the isLoggedIn field
  const isLoggedIn = useSelector((state: IRootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  // Redirect to LoginPage due to not logged in
  if (!isLoggedIn) {
    dispatch(setSnackbar({ text: 'Login benötigt', severity: 'warning' }));
    return <Navigate to={ROUTE_CONFIGS.INDEX.route} replace />;
  }

  // Continue to page wrapped in ProtectedRoute
  return children;
}
