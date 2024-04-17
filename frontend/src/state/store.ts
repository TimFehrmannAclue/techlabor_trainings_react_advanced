import { configureStore } from '@reduxjs/toolkit';

import loginReducer from './slice/loginSlice';
import snackbarReducer from './slice/snackbarSlice';
import enhancedPokemonApi from './api/pokemon/enhancedPokemonApi';
import rtkQueryErrorMiddleware from './api/error/rtkQueryErrorMiddleware';

export const store = configureStore({
  reducer: {
    // Local (RTK) -> https://redux-toolkit.js.org/api/createSlice
    login: loginReducer,
    snackbar: snackbarReducer,

    // Remote (RTK Query) -> https://redux-toolkit.js.org/rtk-query/overview
    [enhancedPokemonApi.reducerPath]: enhancedPokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // Passing Dates which can not be serialized automatically but are serialized manually
    serializableCheck: false,
  })
    .concat(enhancedPokemonApi.middleware)
    // Custom Middleware to catch some default errors of f.e. server not found
    .concat(rtkQueryErrorMiddleware),
});

export type IRootState = ReturnType<typeof store.getState>;
