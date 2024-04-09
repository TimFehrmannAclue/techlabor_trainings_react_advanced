import { ConfigFile } from '@rtk-query/codegen-openapi';

import { REMOTE_SWAGGER_JSON_URL } from '../../../config/config';

// This file & the codegen package do not need to be part of the build but moving it is very cumbersome
// https://redux-toolkit.js.org/rtk-query/usage/code-generation
const config: ConfigFile = {
  schemaFile: REMOTE_SWAGGER_JSON_URL,
  // This path is relative to this config and being used to import the emptyPokemonApi.ts in the generated pokemonApi.ts
  apiFile: './emptyPokemonApi.ts',
  apiImport: 'emptyPokemonApi',
  // This path is relative to this config and being used to save the generated pokemonApi.ts
  outputFile: './pokemonApi.ts',
  exportName: 'pokemonApi',
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
};
export default config;
