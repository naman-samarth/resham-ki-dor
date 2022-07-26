import React, { useEffect, useState } from "react";
import { CounterButton } from "./CounterButton";

const IMG_BASE_URL =
  "https://storage.googleapis.com/resham-ki-dor/rakhi-photos/";

const Product = ({ id, pricePerItem, updateItem, totalQuantity }) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    updateItem(id, quantity);
  }, [id, quantity, updateItem]);

  const increment = () => {
    if (quantity < 10 && totalQuantity < 10) setQuantity((value) => value + 1);
  };

  const decrement = () => {
    if (quantity > 0) setQuantity((value) => value - 1);
  };
  return (
    <div className="flex flex-col items-center justify-between bg-white drop-shadow-md border-1 hover:border-2 border-gray-300 hover:border-red-700  p-2 pb-4 rounded gap-y-4">
      <img alt="img" src={`${IMG_BASE_URL}${id}.webp`} />
      <div className="flex items-center justify-between text-red-700 text-xl font-bold w-full my-2 px-2">
        <div className="flex">
          <h3 className="text-xl">
            {" "}
            &#8377; <span className="text-3xl">{pricePerItem}</span>{" "}
          </h3>
        </div>
        <div class="flex gap-x-1 items-center ">
          <CounterButton
            title="+"
            onClick={increment}
            disabled={quantity >= 10 || totalQuantity >= 10}
          />
          <div className="w-10 h-10  text-gray-600 flex justify-center items-center">
            {quantity}
          </div>
          <CounterButton
            title="-"
            onClick={decrement}
            disabled={quantity < 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
