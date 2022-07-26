import React from "react";

const Button = ({ className, title, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
