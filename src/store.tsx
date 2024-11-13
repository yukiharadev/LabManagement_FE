import { configureStore } from "@reduxjs/toolkit";
import { SideBarReducer } from "./features/Slidebar/SidebarSlice.tsx";
import deviceReducer from "./features/Devices/DeviceSlice.tsx";

export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    device: deviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
