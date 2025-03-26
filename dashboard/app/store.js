import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./slice/DataSlice";

export const store = configureStore({
  reducer: {
    csvData: DataReducer,
  },
});
