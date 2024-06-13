import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

import loadFromLocalStorage from '../../util/localStorage/json/loadFromLocalStorage';
import saveToLocalStorage from '../../util/localStorage/json/saveToLocalStorage';
import removeFromLocalStorage from '../../util/localStorage/json/removeFromLocalStorage';
import { IUser } from '../api/pokemon/pokemonApi';

interface ILoginState extends IUser {
  isLoggedIn: boolean;
  token: string;
}

const initialState: ILoginState = {
  isLoggedIn: false,
  token: '',
  name: '',
  email: '',
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
      // ToDo 2.2 update state correctly and save state to local storage ( use saveToLocalStorage with LOGIN_STATE_TOKEN )
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
      // ToDo 2.3 reset state to initialState and remove token from local storage ( use removeFromLocalStorage with LOGIN_STATE_TOKEN )
      removeFromLocalStorage(LOGIN_STATE_TOKEN);
      return { ...initialState };
    },
  },
});

// ToDo 2.4 export actions
export const {
  setLoggedIn,
  setLoggedOut,
} = loginSlice.actions;

export default loginSlice.reducer;
