import React from "react";

const Button = ({ className, title, onClick, disabled }) => {
  return (
    <div className={className}>
      <button disabled={disabled} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default Button;
