import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const server = import.meta.env.VITE_SERVER;

export const newAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/`,
  }),
  tagTypes: ["User", "Order"],
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "user/all",
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
    placeOrder: builder.mutation({
      query: (order) => ({
        url: "order/place",
        method: "POST",
        credentials: "include",
        body: order,
      }),
      invalidatesTags: ["Order"],
    }),
    allOrders: builder.query({
      query: () => ({
        url: "order/all",
        credentials: "include",
      }),
      providesTags: ["Order"],
    }),
    myOrders: builder.query({
      query: () => ({
        url: "order/my",
        credentials: "include",
      }),
      providesTags: ["Order"],
    }),
    singleOrder: builder.query({
      query: (id) => ({
        url: `order/${id}`,
        credentials: "include",
      }),
      providesTags: ["Order"],
    }),
    stats: builder.query({
      query: () => ({
        url: `order/stats`,
        credentials: "include",
      }),
      providesTags: ["Order"],
    }),
    processOrder: builder.mutation({
      query: (id) => ({
        url: `order/${id}`,
        method: "PUT",
        credentials: "include",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useAllUsersQuery,
  usePlaceOrderMutation,
  useAllOrdersQuery,
  useMyOrdersQuery,
  useSingleOrderQuery,
  useStatsQuery,
  useProcessOrderMutation,
} = newAPI;
