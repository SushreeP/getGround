import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./redux/slice/books";

test("renders book details", () => {
  const initialState = {
    isLoading: false,
    isError: false,
    data: null,
  };
  const mockStore = configureStore(bookReducer);
  const bookStore = mockStore(initialState);
  render(
    <Provider store={bookStore}>
      <App />
    </Provider>
  );
  const cardElement = screen.getByText(/Title/i);
  expect(cardElement).toBeInTheDocument();
});
