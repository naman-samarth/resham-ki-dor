import React, { useEffect, useState } from "react";
import { validateFormValue, validatePhone } from "../utils/utils";

const ModalForm = ({ totalQuantity, totalPrice, onPressConfirm }) => {
  const [name, setName] = useState();
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [phone, setPhone] = useState();
  const [isPhoneInvalid, setIsPhoneInvalid] = useState(false);

  useEffect(() => {
    setIsNameInvalid(!validateFormValue(name));
  }, [name]);

  useEffect(() => {
    setIsPhoneInvalid(!validatePhone(phone));
  }, [phone]);

  const onPressConfirmButton = () => {
    onPressConfirm({ name, phone });
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center w-screen h-screen ">
      <div className=" origin-center z-50 bg-gray-100 opacity-100 flex flex-col text-black gap-3 p-10 items-start w-1/4">
        {" "}
        <div className="text-lg text-bold self-center">
          Please provide the following details :
        </div>
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          className="border w-full"
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        {isNameInvalid && (
          <small className="text-red-600">Please enter a name</small>
        )}
        <label htmlFor="phone">Phone No (10 digits) :</label>
        <input
          id="phone"
          className="border w-full"
          type="tel"
          placeholder="9876543210"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        {isPhoneInvalid && (
          <small className="text-red-600">
            Please enter the correct phone No
          </small>
        )}
        <div className="flex flex-col self-center items-center gap-4">
          <h3>Total Quantity : {totalQuantity}</h3>
          <h3>Total Price: &#8377; {totalPrice}</h3>
        </div>
        <button
          className="text-white p-2 rounded w-full bg-green-600 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={isNameInvalid || isPhoneInvalid}
          onClick={onPressConfirmButton}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
