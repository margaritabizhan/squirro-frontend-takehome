import React from "react";
import { render } from "@testing-library/react";
import BookTable from "../src/components/BookTable";
import '@testing-library/jest-dom';


describe("StoreInfo component", () => {
  // Mock data for props
  const store = {
    name: "Test Store",
    website: "https://example.com",
    id: "1",
    rating: 4,
    storeImage: "test-store-image.jpg",
    establishmentDate: "1995-02-09T00:00:00+0000",
    relationship: {
      countries: "1",
      books: ["1", "2"],
    },
  };

  const authors = { 
    "1": "Test Author 1",
    "2": "Test Author 2",
  };

  const books = {
    "1": {
      name: "Test Book 1",
      copiesSold: 100,
      author: "1",
    },
    "2": {
      name: "Test Book 2",
      copiesSold: 200,
      author: "2",
    }
  };

  test("renders best-selling books when books are available", () => {
    const { getByText } = render(
      <BookTable store={store} authors={authors} books={books} />
    );
    
    //Check if the best-selling books are rendered correctly
    expect(getByText("Best-selling books")).toBeInTheDocument();
    expect(getByText("Test Book 1")).toBeInTheDocument();
    expect(getByText("Test Author 1")).toBeInTheDocument();
    expect(getByText("Test Book 2")).toBeInTheDocument();
    expect(getByText("Test Author 2")).toBeInTheDocument();
  });

  test("renders message when no books are available", () => {
    const { getByText } = render(
      <BookTable store={{ ...store, relationship: { books: [], countries:"" } }} authors={authors} books={books} />
    );
    
    //Check if the message is rendered correctly
    expect(getByText("No data available")).toBeInTheDocument();
  });
});
