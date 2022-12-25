import { configureStore } from "@reduxjs/toolkit";
import { EProfApi } from "./eprof/eprof.api";

export const store = configureStore({
  reducer: {
    [EProfApi.reducerPath]: EProfApi.reducer,
  },
});
