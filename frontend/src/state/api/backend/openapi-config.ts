import { ConfigFile } from '@rtk-query/codegen-openapi';

import { LOCAL_SWAGGER_JSON_URL, REMOTE_SWAGGER_JSON_URL } from '../../../config/config';

// This file & the codegen package do not need to be part of the build but moving it is very cumbersome
const useRemoteSwaggerApi = true;
// https://redux-toolkit.js.org/rtk-query/usage/code-generation
const config: ConfigFile = {
  schemaFile: useRemoteSwaggerApi ? REMOTE_SWAGGER_JSON_URL : LOCAL_SWAGGER_JSON_URL,
  // This path is relative to this config and being used to import the emptyApi.ts in the generated rawApi.ts
  apiFile: './empty/emptyApi.ts',
  apiImport: 'emptyApi',
  // This path is relative to this config and being used to save the generated rawApi.ts
  outputFile: './raw/rawApi.ts',
  exportName: 'rawApi',
  hooks: {
    queries: true,
    lazyQueries: true,
    mutations: true,
  },
};
export default config;
