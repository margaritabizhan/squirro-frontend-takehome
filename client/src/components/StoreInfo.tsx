import React from "react";
import BookTable from "./BookTable";

const StoreInfo: React.FC = () => {
  return (
    <div className="store-info-container">
      <div className="store-header-container">
        <div className="store-name-container">Store Name</div>
        <div className="store-rating-container">
          <span className="store-rating">5.0</span>
          <span className="stars-container">
            <img src="../assets/star.png" alt="Star Rating" width="20" height="20" />
            <img src="../assets/star.png" alt="Star Rating" width="20" height="20" />
            <img src="../assets/star.png" alt="Star Rating" width="20" height="20" />
            <img src="../assets/star.png" alt="Star Rating" width="20" height="20" />
            <img src="../assets/star.png" alt="Star Rating" width="20" height="20" />
          </span>
        </div>
      </div>

      <BookTable />
    </div>
  );
};

export default StoreInfo;