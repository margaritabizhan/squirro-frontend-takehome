import React from "react";
import BookTable from "./BookTable";

const StoreInfo: React.FC = () => {
  return (
    <div className="store-info-container">
      <div className="store-header-container">
        <div className="store-name-container">Store Name</div>
        <div className="store-rating-container">⭐️⭐️⭐️⭐️⭐️</div>
      </div>

      <BookTable />
    </div>
  );
};

export default StoreInfo;