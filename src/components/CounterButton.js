import React from "react";
import Button from "./Button";

export const CounterButton = (props) => {
  return (
    <Button
      {...props}
      className="h-10 w-10 rounded-3xl bg-red-300 disabled:bg-gray-300 disabled:text-gray-100 text-red-700 text-xl "
    />
  );
};
