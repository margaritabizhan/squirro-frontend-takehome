import React from "react";
import { Store, Countries } from "../types";

interface CardFooterProps {
  store: Store,
  countries: Countries,
};

const CardFooter: React.FC<CardFooterProps> = ({ store, countries }) => {
  return (
    <div className="card-footer">
       <div className="date-url-container">
        <p>Url & Date</p> 
      </div>

      <div className="flag-container">
        <img className="flag-img" src="https://flagsapi.com/HR/flat/48.png"></img>
      </div>
    </div>
  );
};

export default CardFooter;