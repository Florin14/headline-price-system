import React from "react";
import "./PriceComponentImage.css";
import pricesSystemImg from "./assets/prices-system.png";

const PriceComponentImage: React.FC = () => {
  return (
    <div className="app-container">
      <img
        src={pricesSystemImg}
        alt="Headline Price System"
        className="background-image"
      />
    </div>
  );
};

export default PriceComponentImage;
