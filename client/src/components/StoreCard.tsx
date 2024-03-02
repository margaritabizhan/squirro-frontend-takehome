import React from "react";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";
import { Store, Authors, Book, Countries } from "../types";

interface StoreCardProps {
  store: Store,
  authors: Authors,
  books: { [id: string]: Book },
  countries: Countries,
};

const StoreCard: React.FC<StoreCardProps> = ({ store, authors, books, countries }) => {
  return (
    <div className="store-card">
      <CardMain store={store} books={books} authors={authors}/>
      <CardFooter store={store} countries={countries}/>
    </div>
  );
};

export default StoreCard;