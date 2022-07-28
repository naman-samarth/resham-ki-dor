import React from "react";

const ContactUs = ({ sellerName, sellerPhone }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-gray-200 bg-red-900 p-1 border-b border-white">
      <div className="font-semibold mr-6">
        Reach us on <i className="fa-solid fa-phone" /> or{" "}
        <i className="fa-brands fa-whatsapp" /> :
      </div>
      <div>
        {sellerPhone} ({sellerName})
      </div>
    </div>
  );
};

export default ContactUs;
