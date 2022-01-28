import { createSlice } from '@reduxjs/toolkit';

export const hideSideBar = createSlice({
  name: 'sidebar',
  initialState: {
    value: false
  },
  reducers: {
    hideShowSidebar: state => {
      state.value = !state.value
  }
}
})

export const { hideShowSidebar } = hideSideBar.actions;

export default hideSideBar.reducer;