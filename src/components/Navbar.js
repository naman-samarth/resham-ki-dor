import React from "react";

export const Navbar = () => {
  return (
    <div className="sticky h-15 t-0 p-5 md:px-20 text-gray-200 bg-red-900 mx-auto">
      <div className="flex flex-row justify-center md:justify-start">
        <img
          className="w-16 h-16"
          src="https://storage.googleapis.com/resham-ki-dor/logos/small_logo.png"
          alt="logo"
        />
        <div className="text-4xl font-Dancing self-center">Resham ki Dor</div>
      </div>
    </div>
  );
};
