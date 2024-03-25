import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAlert } from '../../../type/component/feedback/IAlert';

interface ISnackbarState {
  currentAlert: IAlert | undefined;
}

const initialState: ISnackbarState = {
  currentAlert: undefined,
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action: PayloadAction<IAlert>) => {
      const currentAlert = action.payload;

      return {
        ...state,
        currentAlert,
      };
    },
    clearSnackbar: () => ({ ...initialState }),
  },
});

export const {
  setSnackbar,
  clearSnackbar,
} = snackbarSlice.actions;

export default snackbarSlice.reducer;
