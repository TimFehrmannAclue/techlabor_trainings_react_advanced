import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { POKEMON_API_NAME, BACKEND_URL } from '../../../config/config';

// Initialize an empty api service that we'll inject endpoints into later when needed
// This is only the case as rtk-codegen is used to generate the api; otherwise it would be added here manually

// rawApi.ts expects non-default export
// eslint-disable-next-line import/prefer-default-export
export const emptyPokemonApi = createApi({
  reducerPath: POKEMON_API_NAME,
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BACKEND_URL,
    },
  ),
  endpoints: () => ({}),
});
