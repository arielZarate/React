import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: TaskSlice,
  },
});
