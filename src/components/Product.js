import React, { useEffect, useState } from "react";
import Button from "./Button";
import CounterButton from "./CounterButton";

const Product = ({ id, updateItem }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    updateItem(id, quantity);
  }, [id, quantity, updateItem]);

  return (
    <div className="flex flex-col items-center">
      <img src="https://static.toiimg.com/thumb/70672090.cms?width=680&height=512&imgsize=695460" />
      <h3>&#8377; 10</h3>
      <div className="flex">
        <CounterButton
          title="+"
          onClick={incrementQuantity}
          disabled={quantity === 10}
        />
        <div className="flex-2">
          <p>{quantity}</p>
        </div>
        <CounterButton
          title="-"
          onClick={decrementQuantity}
          disabled={quantity === 0}
        />
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <select
              class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
