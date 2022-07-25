import React from "react";
import Button from "./Button";

const CounterButton = (props) => {
  return (
    <div className="bg-red-600 px-4">
      <Button {...props} />
    </div>
  );
};

export default CounterButton;
