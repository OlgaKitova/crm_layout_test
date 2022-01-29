import { createSlice } from '@reduxjs/toolkit';

export const hideFilterBlock = createSlice({
  name: 'filterblock',
  initialState: {
    value: false
  },
  reducers: {
    hideShowFilter: state => {
      state.value = !state.value
  }
}
})

export const { hideShowFilter } = hideFilterBlock.actions;

export default hideFilterBlock.reducer;