import React from "react";
import Product from "./Product";

const ProductGrid = ({
  ids,
  updateItem,
  pricePerItem,
  totalQuantity,
  totalLimit,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 md:p-20 ">
      {ids.map((id) => (
        <Product
          key={id}
          id={id}
          pricePerItem={pricePerItem}
          updateItem={updateItem}
          totalQuantity={totalQuantity}
          totalLimit={totalLimit}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
