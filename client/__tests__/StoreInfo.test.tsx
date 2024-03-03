import React from "react";
import { render } from "@testing-library/react";
import StoreInfo from "../src/components/StoreInfo";
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
    "1": "Test Author",
  };

  const books = {
    "1": {
      name: "Test Book 1",
      copiesSold: 100,
      author: "1",
    }
  };

  test('renders store name and rating', () => {
    const { getByText } = render(<StoreInfo store={store} authors={authors} books={books} />);
    expect(getByText("Test Store")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
  });

  
});