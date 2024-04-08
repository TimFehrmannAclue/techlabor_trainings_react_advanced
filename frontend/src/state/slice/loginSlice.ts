import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

import loadFromLocalStorage from '../../util/localStorage/json/loadFromLocalStorage';
import saveToLocalStorage from '../../util/localStorage/json/saveToLocalStorage';
import removeFromLocalStorage from '../../util/localStorage/json/removeFromLocalStorage';
import { IUser } from '../api/backend/raw/rawApi';

interface ILoginState extends IUser {
  isLoggedIn: boolean;
  token: string;
}

const initialState: ILoginState = {
  isLoggedIn: false,
  name: '',
  email: '',
  token: '',
};

// Storing login data in localStorage to be persistent across page refresh
const LOGIN_STATE_TOKEN = 'LOGIN_STATE_TOKEN';
const loadedState = loadFromLocalStorage<ILoginState>(LOGIN_STATE_TOKEN, { ...initialState });

export const loginSlice = createSlice({
  name: 'login',
  initialState: loadedState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<string>) => {
      const token = action.payload;
      const user = jwtDecode(token) as IUser;
      const newState = {
        ...state,
        isLoggedIn: true,
        token,
        ...user,
      };

      saveToLocalStorage(LOGIN_STATE_TOKEN, newState);
      return newState;
    },
    setLoggedOut: () => {
      removeFromLocalStorage(LOGIN_STATE_TOKEN);
      return { ...initialState };
    },
  },
});

export const {
  setLoggedIn,
  setLoggedOut,
} = loginSlice.actions;

export default loginSlice.reducer;
