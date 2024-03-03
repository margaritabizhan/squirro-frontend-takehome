import React, { useState, useEffect } from "react";
import StoreCard from "./StoreCard";
import { Store, Authors, Book, Countries } from "../types";


const StoreContainer: React.FC = () => {
  //Initializing state for store, authors, books, and countries
  const [stores, setStores] = useState<{ [id: string]: Store }>({});
  const [authors, setAuthors] = useState<Authors>({});
  const [books, setBooks] = useState<{ [id: string]: Book }>({});
  const [countries, setCountries] = useState<Authors>({});
  const [isLoading, setIsLoading] = useState<boolean>(true); //Loading state while data is being fetched
  const [isError, setIsError] = useState<string | null>(null); //Error state if data fetching fails

  //Function to create store data
  const createStores = (data: any[]): void => {
    const storesData: { [id: string]: Store } = {};
    for (let i: number = 0; i < data.length; i++) {
      const { id, attributes: {name, website, rating, storeImage, establishmentDate}, relationships } = data[i];
      storesData[id] = { 
        name, 
        website, 
        rating, 
        storeImage, 
        establishmentDate, 
        relationship: {
          countries: "",
          books: []
      }};
      //One store can only be located in one country
      if (relationships && relationships.countries) {
        storesData[id].relationship.countries = relationships.countries.data.id;
      };
      //Check if store has info about books
      if (relationships && relationships.books) {
        relationships.books.data.forEach((book: any) => {
          storesData[id].relationship.books.push(book.id)
        });
      };
  };
  setStores(storesData);
  };

  //Functionality ro create authors, books and countries data
  const createAuthorsBooksCountries = (data: any[]): void => {
    const authorsData: Authors = {};
    const booksData: { [id: string]: Book } = {};
    const countriesData: Countries  = {};

    for (let i: number = 0; i < data.length; i++) {
      switch (data[i].type) {
        case "authors":
          authorsData[data[i].id] = data[i].attributes.fullName;
          break;
        case "books":
          const { id, attributes: { name, copiesSold }, relationships: { author: { data: { id: authorId } } } } = data[i];
          booksData[id] = { name, copiesSold, author: authorId };
          break;
        case "countries":
          countriesData[data[i].id] = data[i].attributes.code;
          break;
        default:
          break;
      };
    };
    setAuthors(authorsData);
    setBooks(booksData);
    setCountries(countriesData);
  };

  useEffect(() => {
    //API call to get all store data
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:3000/stores', {});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        };
        const data = await response.json();
        //Process data to populate store, authors, books, and countries states
        createStores(data.data);
        createAuthorsBooksCountries(data.included);
        //Loading false after data is fetched
        setIsLoading(false);

      } catch(error) {
        console.log('Error: fetching data: ', error);
        setIsError('Oooops! Something went wrong!');
        setIsLoading(false);
      };
    };

    fetchData();
  },[]);

  //Create store cards for each store
  const storeCardContainer: React.ReactElement[] = [];
  for (let key in stores) {
    storeCardContainer.push(<StoreCard key={key} store={stores[key]} authors={authors} books={books} countries={countries} />);
  };

  return (
    <div className="store-container">
      {isLoading ? <h1 className="loading-message">Loading...</h1> : null}
      {isError ? 
        <div className="error-container">
          <h1 className="error-message">{isError}</h1>
          <img src="../assets/error.png" alt="Error" className="error-img" />
        </div>
        : storeCardContainer}
    </div>
  );
};

export default StoreContainer;
