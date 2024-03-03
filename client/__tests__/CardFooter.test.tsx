import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import CardFooter from "../src/components/CardFooter";
import '@testing-library/jest-dom';


describe("CardFooter component", () => {
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

  const countries = {
    "1": "US",
  };

  test("renders card footer with correct data", () => {
    const { getByText, container } = render(
      <CardFooter store={store} countries={countries} />
    );
    // Check if the store website is rendered correctly
    expect(getByText("https://example.com")).toBeInTheDocument();
    expect(getByText(/9.2.1995/)).toBeInTheDocument();

    const flagImage = screen.getByRole('img');
    expect(flagImage).toBeInTheDocument();
    expect(flagImage).toHaveAttribute(
      "src",
      "https://flagsapi.com/US/flat/48.png"
    );
  });
});