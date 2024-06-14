import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { IRootState } from '../store';

// theme state should toggle theme between 'light' and 'dark'
export interface IThemeState {
}

const initialState: IThemeState = {
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    doSomething: (state, action: PayloadAction<any>) => {
      const something = action.payload;

      const newState: IThemeState = {
        ...state,
      }
      return newState;
    },
  },
});

// export actions

// export selector (optional)

// export reducer as default
