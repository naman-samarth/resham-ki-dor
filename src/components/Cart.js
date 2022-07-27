import React from "react";

export const Cart = ({ totalQuantity, onPressConfirm, totalPrice }) => {
  return (
    <>
      <div className="sticky bottom-0 w-screen p-4 flex flex-col md:flex-row bg-red-900 text-white">
        <div className="flex justify-between md:pb-2 pb-6 items-end w-full px-6">
          <h3>Total Qty : {totalQuantity}</h3>
          <h3>
            Total Price:<span className="text-2xl"> &#8377;{totalPrice} </span>
          </h3>
        </div>
        <button
          className={"border p-2 px-4 rounded bg-green-600"}
          disabled={totalQuantity > 11}
          onClick={onPressConfirm}
        >
          {" "}
          <span className="flex justify-center items-center gap-x-1 text-xl ">
            <h3> Checkout </h3>
            <i class="fa-solid fa-chevron-right invisible md:visible"></i>
          </span>
        </button>
      </div>
    </>
  );
};
