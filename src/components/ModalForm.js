import React, { useEffect, useState } from "react";
import { validateFormValue, validatePhone } from "../utils/utils";
import TextInput from "./TextInput";

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
    <div className="flex h-full flex-col justify-between">
      <div className="text-bold">Please provide your contact information :</div>
      <div>
        <label htmlFor="name">Name :</label>
        <div>
          <TextInput
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={setName}
          />
          {isNameInvalid && (
            <small className="text-red-600">Please enter a name</small>
          )}
        </div>
      </div>
      <div>
        <label htmlFor="phone">Phone No (10 digits) :</label>
        <div>
          <TextInput
            id="phone"
            type="tel"
            name="name"
            placeholder="9876543210"
            value={phone}
            onChange={setPhone}
          />
          {isPhoneInvalid && (
            <small className="text-red-600">
              Please enter a valid phone number
            </small>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center text-lg">
        <h3>
          Total Qty : <span className="text-2xl">{totalQuantity}</span>
        </h3>
        <h3>
          Total Price: &#8377; <span className="text-2xl">{totalPrice}</span>
        </h3>
      </div>
      <button
        className="text-white p-2 rounded w-full bg-green-600 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={isNameInvalid || isPhoneInvalid}
        onClick={onPressConfirmButton}
      >
        Confirm
      </button>
      {!isNameInvalid && !isPhoneInvalid && (
        <small className="text-xs text-center">
          *You will be redirected to your{" "}
          <i className="fa-brands fa-whatsapp"></i> WhatsApp to send order
          details
        </small>
      )}
    </div>
  );
};

export default ModalForm;
