import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import API from '@presenter/io/config';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrlNode,
    prepareHeaders: async (headers: Headers) => {
      /* const token = await getSessionToken();

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', token);
      } */

      return headers;
    },
  }),
  endpoints: () => ({}),
});
