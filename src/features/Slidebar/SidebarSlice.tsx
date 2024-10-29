import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTitle: "Home",
};

export const sidebarSlice = createSlice({
  name: "title",
  initialState: initialState,
  reducers: {
    setSidebarTitle: (state, action) => {
      state.activeTitle = action.payload;
    },
  },
});

export const { setSidebarTitle } = sidebarSlice.actions;
export const SideBarReducer = sidebarSlice.reducer;
