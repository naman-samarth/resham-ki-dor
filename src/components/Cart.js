import React from "react";
import ModalForm from "./ModalForm";

export const Cart = ({ totalQuantity }) => {
  const [showModal, setShowModal] = React.useState(true);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
      {" "}
      {showModal && <ModalForm totalQuantity={totalQuantity} />}
      <div className="sticky bottom-0 w-screen p-4 flex flex-col md:flex-row justify-between bg-red-900 text-white">
        <div className="flex justify-between gap-10">
          <h3>Total Quantity : {totalQuantity}</h3>
          <h3>
            Total Price: {totalQuantity} x &#8377; 10 = &#8377;{" "}
            {totalQuantity * 10}
          </h3>
        </div>
        {totalQuantity > 10 && (
          <div className="text-gray-100">
            You can only select at max 10 items, please update the selection!{" "}
          </div>
        )}
        <button
          className={`border p-2 rounded ${
            totalQuantity > 11 ? "bg-gray-300" : "bg-green-800 "
          }`}
          disabled={totalQuantity > 11}
          onClick={handleClick}
        >
          {" "}
          Place Order{" "}
        </button>
      </div>
    </>
  );
};
