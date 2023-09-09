import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,

  },
});

export default store;
