import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("fetchBooks", async (pageNumber) => {
  const response = await axios.post(`http://nyx.vima.ekt.gr:3000/api/books`, {
    params: { page: pageNumber },
  });
  return response?.data?.books;
});

const bookSlice = createSlice({
  name: "books",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isError = true;
      console.error(action.payload);
    });
  },
});

export default bookSlice.reducer;
