import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slice/books";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
