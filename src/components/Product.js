import React, { useEffect, useState } from "react";

const IMG_BASE_URL =
  "https://storage.googleapis.com/resham-ki-dor/rakhi-photos/";

const Product = ({ id, updateItem }) => {
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    updateItem(id, quantity);
  }, [id, quantity, updateItem]);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };
  return (
    <div className="flex flex-col items-center">
      <img alt="img" src={`${IMG_BASE_URL}${id}.webp`} />
      <h3>&#8377; 10</h3>
      <div className="flex">
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
              onChange={handleChange}
            >
              <option selected>Qty</option>
              {[...Array(10).keys()].map((item) => (
                <option value={item + 1}>{item + 1}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
