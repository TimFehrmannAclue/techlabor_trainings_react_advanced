import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BACKEND_URL, POKEMON_API_NAME } from '../../../config/config';
import { IRootState } from '../../store';

// Initialize an empty api service that we'll inject endpoints into later when needed
// This is only the case as rtk-codegen is used to auto-generate the api; otherwise it would be added here manually

// pokemonApi.ts expects non-default export
// eslint-disable-next-line import/prefer-default-export
export const emptyPokemonApi = createApi({
  reducerPath: POKEMON_API_NAME,
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BACKEND_URL,
      // Add Bearer Authorization using jwt to all requests except /login
      prepareHeaders: (headers, api) => {
        if (api.endpoint === 'login') {
          return headers;
        }

        const getState = api.getState as () => IRootState;
        const { token } = getState().login;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }

        return headers;
      },
    },
  ),
  endpoints: () => ({}),
});
