import { configureStore } from "@reduxjs/toolkit";
import { SideBarReducer } from "./features/Slidebar/SidebarSlice.tsx";

export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
