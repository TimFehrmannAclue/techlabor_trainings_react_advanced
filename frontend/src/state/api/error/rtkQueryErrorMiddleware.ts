import { isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { setSnackbar } from '../../slice/snackbarSlice';

import getRtkQueryErrorText from './localizeRtkQueryError';

// Store containing all state slices
const rtkQueryErrorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    const { status, error } = action.payload as {status: string, error: string};
    const text = getRtkQueryErrorText(status, error);
    api.dispatch(setSnackbar({ text, severity: 'error' }));
  }

  return next(action);
};

export default rtkQueryErrorMiddleware;
