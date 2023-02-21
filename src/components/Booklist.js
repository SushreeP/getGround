import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/slice/books";
import { Grid, CircularProgress } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import Book from "./Book";
import "./Booklist.css";

const Booklist = ({ pageNumber }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchBooks(pageNumber));
  }, [dispatch, pageNumber]);

  if (state.books.isLoading) {
    return (
      <Grid container className="loading">
        <Grid item xs={12} p={"30vh"}>
          <CircularProgress />
          <span>Loading...</span>
        </Grid>
      </Grid>
    );
  }

  if (state.books.isError) {
    return (
      <Grid container className="error">
        <Grid item xs={12} p={"30vh"}>
          <ErrorIcon color="error" />
          <span>Error!</span>
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      {state.books.data?.map((book) => (
        <Grid item xs={3} key={book.id}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Booklist;
