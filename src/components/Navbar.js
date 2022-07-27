import React from "react";

export const Navbar = ({ sellerName, sellerPhone }) => {
  return (
    <div className="sticky h-15 t-0 p-5 text-gray-200 bg-red-900 flex justify-between">
      <div className="flex flex-row">
        <img
          className="w-16 h-16"
          src="https://storage.googleapis.com/resham-ki-dor/logos/small_logo.png"
          alt="logo"
        />
        <div className="text-4xl font-Dancing self-center">Resham ki Dor</div>
      </div>
      {/* Products and contact  */}
      {/* Make total max env variable */}
      {/* Modal for user details */}
      {/* Order ID */}
      <div className="flex flex-col items-start">
        <div className="font-semibold">Contact Us:</div>{" "}
        <div>Name: {sellerName}</div> <div>Phone: +91 {sellerPhone}</div>{" "}
      </div>
    </div>
  );
};
