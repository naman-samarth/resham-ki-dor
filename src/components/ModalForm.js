import React from "react";

const ModalForm = ({ totalQuantity }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center w-screen h-screen ">
      <div className=" origin-center z-50 bg-gray-100 opacity-100 flex flex-col text-black gap-3 p-10 items-start w-1/4">
        {" "}
        <div className="text-lg text-bold self-center">
          Please confirm the following
        </div>
        Name :
        <input className="border w-full" />
        Phone Number:
        <input className="border w-full" />{" "}
        <div className="flex flex-col self-center items-center gap-4">
          <h3>Total Quantity : {totalQuantity}</h3>
          <h3>
            Total Price: {totalQuantity} x &#8377; 10 = &#8377;{" "}
            {totalQuantity * 10}
          </h3>
        </div>
        <button
          className="bg-green-900 text-white p-2 rounded w-full"
          onSubmit={() => {}}
        >
          {" "}
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
