import React from "react";

const InvoiceDetails = ({ party }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-4 mb-4">
      <div>
        <h3 className="font-semibold">Details of Receiver | Billed to:</h3>
        <p><strong>Name:</strong> {party.legal_name}</p>
        <p><strong>Address:</strong> {party.shipping_address.address1}, {party.shipping_address.city}, {party.shipping_address.state} - {party.shipping_address.pincode}</p>
      </div>
      <div>
        <h3 className="font-semibold">Details of Consignee | Shipped to:</h3>
        <p><strong>Name:</strong> {party.legal_name}</p>
        <p><strong>Address:</strong> {party.shipping_address.address1}, {party.shipping_address.city}, {party.shipping_address.state} - {party.shipping_address.pincode}</p>
      </div>
    </div>
  );
};

export default InvoiceDetails;
