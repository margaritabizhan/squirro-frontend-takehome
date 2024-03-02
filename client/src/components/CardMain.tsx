import React from "react";
import StoreInfo from "./StoreInfo";  

const CardMain: React.FC = () => {
  return (
    <div className="card-main">
      <div className="store-img-container">
        <img className="store-img"
          src="https://media.licdn.com/dms/image/D4E0BAQHFvm9UfpNALA/company-logo_200_200/0/1704718931361/squirroag_logo?e=1717632000&v=beta&t=oVn6m3UyBfRoeulWhq5hGZUyZbYoCo-0pcjaXjUzG-4" 
          alt="Store Image" />
      </div>

      <StoreInfo />
    </div>
  );
};

export default CardMain;