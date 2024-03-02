import React from "react";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";

const StoreCard: React.FC = () => {
  return (
    <div className="store-card">
      <CardMain />
      <CardFooter />
    </div>
  );
};

export default StoreCard;