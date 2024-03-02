import React from "react";
import StoreInfo from "./StoreInfo";  
import { Store, Authors, Book } from "../types";

interface CardMainProps {
  store: Store,
  authors: Authors,
  books: { [id: string]: Book },
};

const CardMain: React.FC<CardMainProps> = ({ store, authors, books }) => {
  const storeImgUrl = store.storeImage;

  return (
    <div className="card-main">
      <div className="store-img-container">
        <div className="store-img-bg"
          style={{ backgroundImage: `url(${storeImgUrl})` }}>
        </div>
      </div>

      <StoreInfo store={store} books={books} authors={authors} />
    </div>
  );
};

export default CardMain;