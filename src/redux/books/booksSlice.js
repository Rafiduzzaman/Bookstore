import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
  ],

  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },
    removeBook(state, action) {
      return state.filter((book) => book.item_id !== action.payload);
    },

  },
});

const { addBook, removeBook } = booksSlice.actions;
export { addBook, removeBook };
export default booksSlice.reducer;
