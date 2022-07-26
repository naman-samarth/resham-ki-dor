import React from "react";
import Product from "./Product";

const ProductGrid = ({ ids, updateItem }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-20 ">
      {ids.map((id) => (
        <Product key={id} id={id} updateItem={updateItem} />
      ))}
    </div>
  );
};

export default ProductGrid;
