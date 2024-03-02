import React from "react";
import BookTable from "./BookTable";
import { Store, Authors, Book } from "../types";

interface StoreInfoProps {
  store: Store,
  authors: Authors,
  books: { [id: string]: Book },
}

const StoreInfo: React.FC<StoreInfoProps> = ({ store, authors, books }) => {

  const ratingStars: React.ReactElement[] = [];
  for (let i: number = 0; i < store.rating; i++) {
    ratingStars.push(<img src="../assets/star.png" alt="Star Rating" className="star-img" />)
  };

  return (
    <div className="store-info-container">
      <div className="store-header-container">
        <div className="store-name-container">{store.name}</div>
        <div className="store-rating-container">
          <span className="store-rating">{store.rating}</span>
          <span className="stars-container">
            {ratingStars}
          </span>
        </div>
      </div>

      <BookTable store={store} books={books} authors={authors} />
    </div>
  );
};

export default StoreInfo;