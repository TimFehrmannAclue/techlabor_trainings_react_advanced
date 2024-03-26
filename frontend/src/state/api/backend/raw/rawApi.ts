import { emptyApi as api } from '../empty/emptyApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postDummy: build.mutation<PostDummyApiResponse, PostDummyApiArg>({
      query: () => ({ url: '/dummy', method: 'POST' }),
    }),
    getPokemon: build.query<GetPokemonApiResponse, GetPokemonApiArg>({
      query: () => ({ url: '/pokemon' }),
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
export type GetPokemonApiResponse =
  /** status 200 All Pokemon and more! */ IPokemon[];
export type GetPokemonApiArg = void;
export type PostLoginApiResponse =
  /** status 200 Authentication successful. */ string;
export type PostLoginApiArg = {
  body: {
    email: string;
    password: string;
  };
};
export type IPokemon = {
  id: number;
  name: string;
};
export type IUser = {
  email: string;
  name: string;
};
export type DummySchema = IPokemon & IUser;
export const {
  usePostDummyMutation,
  useGetPokemonQuery,
  useLazyGetPokemonQuery,
  usePostLoginMutation,
} = injectedRtkApi;
