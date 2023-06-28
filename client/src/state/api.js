import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Dashboard",
  ],
  endpoints: (build) => ({
    getDashboard: build.query({
      query: () => "general/dashboard",
      providesTags: ["Dashboard",]
    }),
  }),
});

export const {
  useGetDashboardQuery,
} = api;
