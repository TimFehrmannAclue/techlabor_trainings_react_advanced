import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { IRootState } from '../store';

// theme state should toggle theme between 'light' and 'dark'
export interface IThemeState {
    currentTheme: 'light' | 'dark';
}

const initialState: IThemeState = {
  currentTheme: 'light',
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

    toggleTheme: (state) => {
      const newState: IThemeState = {
        ...state,
        currentTheme: state.currentTheme === 'light' ? 'dark' : 'light',
      }
      return newState;
    },
  },
});

// export actions
export const {
  doSomething,
  toggleTheme,
} = themeSlice.actions;

// export selector (optional)
export const selectCurrentTheme = () => useSelector((state: IRootState) => state.theme.currentTheme)

// export reducer as default
export default themeSlice.reducer;
