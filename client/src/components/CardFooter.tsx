import React from "react";
import { Store, Countries } from "../types";

interface CardFooterProps {
  store: Store,
  countries: Countries,
};

const CardFooter: React.FC<CardFooterProps> = ({ store, countries }) => {
  //Formatting establishment date
  const dataIso: string = store.establishmentDate;
  const date: Date = new Date(dataIso);
  const dateFormatted: string = `${date.getDate()+1}.${date.getMonth()+1}.${date.getFullYear()}`

  //Store URL
  const storeUrl: string = store.website;

  //Flag URL
  const countryId: string = store.relationship.countries;
  //Adjust URL based on screen size, request smaller flag for mobile
  const flagSize: string = window.innerWidth < 768 ? "24" : "48";
  const flagUrl: string = `https://flagsapi.com/${countries[countryId]}/flat/${flagSize}.png`;
  //Styles to accommodate how API handles different flag sizes. Not best practice, but works for this case
  const flagContainerStyle: React.CSSProperties = countries[countryId] === 'CH' ? { paddingRight: "2%" } : { paddingRight: "3%" };


  return (
    <div className="card-footer">
       <div className="date-url-container">
        <span>{dateFormatted} - </span>
        <a href={storeUrl} target="_blank" rel="noopener noreferrer">{storeUrl}</a>
      </div>

      <div className="flag-container" style={flagContainerStyle}>
        <img className="flag-img" src={flagUrl}></img>
      </div>
    </div>
  );
};

export default CardFooter;