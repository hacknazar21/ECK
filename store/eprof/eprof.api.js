import { createApi } from "@reduxjs/toolkit/query/react";
export const EProfApi = createApi({
  reducerPath: "eprof/api",
  baseQuery: "https://eprof.kz",
  endpoints: (build) => ({
    getNotifications: build.query({
      query: (token) => ({
        url: "/api/notifications/recent/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useGetNotificationsQuery } = EProfApi;
