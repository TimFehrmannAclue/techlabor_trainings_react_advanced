import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { setSnackbar } from '../../slice/snackbarSlice';
import IAction from '../../../../type/rtk/IAction';

import getRtkQueryErrorText from './localizeRtkQueryError';

const rtkQueryErrorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  const typedAction = action as IAction;
  if (isRejectedWithValue(action)) {
    const { status, error, data } = typedAction.payload;
    const text = getRtkQueryErrorText(status, error, data?.message);
    api.dispatch(setSnackbar({ severity: 'error', text }));
  }

  return next(action);
};

export default rtkQueryErrorMiddleware;
