import React from "react";

const InvoiceHeader = ({ companyName, city, state, pincode }) => {
  return (
    <div className="text-center border-b pb-4 mb-4">
      <h2 className="text-2xl font-bold">{companyName}</h2>
      <p>{city}, {state}, {pincode}</p>
      <h3 className="text-xl font-semibold mt-2">TAX INVOICE</h3>
    </div>
  );
};

export default InvoiceHeader;
