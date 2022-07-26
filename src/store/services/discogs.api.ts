import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RecordSearchResponse } from "./discorgs.types";

const dcsKey = process.env.DISCOGS_KEY;
const dcsSecret = process.env.DISCOGS_SECRET;

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.discogs.com/",
  prepareHeaders: headers => {
    headers.set("User-Agent", "RalemDiscogsApp/0.1 +https://github.com/Ralem");
    headers.set("authorization", `Discogs key=${dcsKey}, secret=${dcsSecret}`);
    return headers;
  },
});

export const discogsApi = createApi({
  reducerPath: "discogsApi",
  baseQuery,
  endpoints: builder => ({
    searchByTerm: builder.query<RecordSearchResponse, string>({
      query: name => `database/search?q=${name}&type=release`,
    }),
  }),
});

export const { useLazySearchByTermQuery } = discogsApi;
