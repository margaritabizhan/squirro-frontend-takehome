import React, { useState, useEffect } from "react";
import StoreCard from "./StoreCard";
import { Store } from "../types";

const StoreContainer: React.FC = () => {
  //Initializing state for store, authors, books, and countries
  const [stores, setStores] = useState({}); //Add types here!!!
  const [authors, setAuthors] = useState({});
  const [books, setBooks] = useState({});
  const [countries, setCountries] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true); //Loading state while data is being fetched
  const [isError, setIsError] = useState<string | null>(null); //Error state if data fetching fails

  //Function to create store data
  const createStore = (data: any[]): void => {
    const storeData: { [id: string]: Store } = {};
    for (let i: number = 0; i < data.length; i++) {
      const { id, attributes: {name, website, rating, storeImage, establishmentDate}, relationships } = data[i];
      storeData[id] = { 
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
      if (relationships && relationships.country) {
        storeData[id].relationship.countries = relationships.countries.data.id;
      };
      //Check if store has info about books
      if (relationships && relationships.books) {
        relationships.books.data.forEach((book: any) => {
          storeData[id].relationship.books.push(book.id)
        });
      };
  };
  setStores(storeData);
  };


  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:3000/stores', {});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        };
        const data = await response.json();
        //Process data to populate store, authors, books, and countries
        createStore(data.data);

      } catch(error) {
        console.log('Error: fetching data: ', error);
        setIsError('Oooops! Something went wrong!');
        setIsLoading(false);
      };
    };

    fetchData();
  },[]);

  useEffect(() => {
    console.log('Stores state: ', stores);
  }, [stores, authors, books, countries]);



  return (
    <div className="store-container">
      <StoreCard />
    </div>
  );
};

export default StoreContainer;

/**
 store = {
  1: { 
    'name": "John",
    "website": "www.john.com",
    'rating': 5,
    'storeImage': 'www.john.com/image.jpg',
    'etstablisment': 'sample'
    'relationship': {
      'countries': 1,
      'books': [1, 2, 8]
    }
  }
 }

 authors = {
  'id': 'John Doe',
 }

 books = {
  'id(1)' : {
    name: 'book name',
    copiesSold: 100,
  },
  author: 1
 }

countries ={
  'id' : 'HR'

}


 */