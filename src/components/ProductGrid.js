import React from "react";
import Product from "./Product";

const ProductGrid = ({ ids, updateItem }) => {
  return (
    <div className="grid grid-cols-2">
      {ids.map((id) => (
        <Product id={id} updateItem={updateItem} />
      ))}
    </div>
  );
};

export default ProductGrid;
