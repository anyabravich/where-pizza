import React from "react";
import H2 from "./H2";
import Cards from "./Cards";

const CardsAndTitle = ({ title, product }) => {
  return (
    <>
      <H2 mb={32}>{title}</H2>
      <Cards product={product} />
    </>
  );
};

export default CardsAndTitle;
