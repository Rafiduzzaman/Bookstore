import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under Construction';
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus(state, action) {
      if (action.payload === 'Under Construction') {
        return 'Under Construction';
      }
      return state.category;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
