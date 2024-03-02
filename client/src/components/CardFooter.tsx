import React from "react";

const CardFooter: React.FC = () => {
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