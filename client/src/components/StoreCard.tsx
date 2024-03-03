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
  //CardMain contains the store image, name, rating and books info
  //CardFooter contains the store website, establishment date and country flag
  return (
    <div className="store-card">
      <CardMain store={store} books={books} authors={authors}/>
      <CardFooter store={store} countries={countries}/>
    </div>
  );
};

export default StoreCard;