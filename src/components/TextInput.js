import React from "react";

const TextInput = ({ id, type, name, placeholder, value, onChange }) => {
  return (
    <input
      id={id}
      className="border rounded text-lg w-full m-0 py-1 px-2 text-gray-500 focus:border-red-300 focus:outline-none"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};

export default TextInput;
