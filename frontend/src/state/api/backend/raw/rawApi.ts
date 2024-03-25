import { emptyApi as api } from '../empty/emptyApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postDummy: build.mutation<PostDummyApiResponse, PostDummyApiArg>({
      query: () => ({ url: '/dummy', method: 'POST' }),
    }),
    getTables: build.query<GetTablesApiResponse, GetTablesApiArg>({
      query: () => ({ url: '/tables' }),
    }),
    postLogin: build.mutation<PostLoginApiResponse, PostLoginApiArg>({
      query: (queryArg) => ({
        url: '/login',
        method: 'POST',
        body: queryArg.body,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rawApi };
export type PostDummyApiResponse = unknown;
export type PostDummyApiArg = void;
export type GetTablesApiResponse = /** status 200 A list of tables */ ITable;
export type GetTablesApiArg = void;
export type PostLoginApiResponse =
  /** status 200 Authentication successful. */ {
    jwt: string;
  };
export type PostLoginApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type ITable = {
  id: number;
  name: string;
  color: string;
};
export type IUser = {
  email: string;
  name: string;
};
export type DummySchema = ITable & IUser;
export const {
  usePostDummyMutation,
  useGetTablesQuery,
  useLazyGetTablesQuery,
  usePostLoginMutation,
} = injectedRtkApi;
