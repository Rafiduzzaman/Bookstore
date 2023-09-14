import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ElYghkRfr50v7jhaGmfm/books';

const addBookAsync = createAsyncThunk('books/addBooksAsync', async (newBook) => {
  await axios.post(appUrl, newBook);
  return newBook;
});

const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (bookId) => {
  await axios.delete(`${appUrl}/${bookId}`);
  return bookId;
});

const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(appUrl);
  const result = Object.keys(response.data).map((id) => ({
    item_id: id,
    ...response.data[id][0],
  }));
  return result;
});

const initialState = {
  books: [], // Initialize books as an empty array
  isLoading: true,
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => ({
        ...state,
        status: 'loading',
        isLoading: true,
      }))
      .addCase(fetchBooksAsync.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        books: action.payload,
        isLoading: false,
      }))
      .addCase(fetchBooksAsync.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
        isLoading: true,
      }))
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        if (action.payload) {
          return {
            ...state,
            books: state.books.filter((book) => book.item_id !== action.payload),
          };
        }
        return state;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
      }));
  },
});

export { addBookAsync, removeBookAsync, fetchBooksAsync };
export default booksSlice.reducer;
