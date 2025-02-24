import React, { useRef } from "react";


import InvoiceHeader from "./InvoiceHeader";
import InvoiceActions from "./InvoiceActions";
import InvoiceDetails from "./InvoiceDetails";
import InvoiceTable from "./InvoiceTable";
import InvoiceFooter from "./InvoiceFooter";

const formatCurrency = (amount) => `₹${amount.toFixed(2)}`;
const calculateSubtotal = (quantity, rate) => quantity * rate;
const calculateTax = (subtotal, taxRate) => (subtotal * taxRate) / 100;
const calculateTotal = (subtotal, cgstAmount, sgstAmount) => subtotal + cgstAmount + sgstAmount;

const Invoice = ({ data }) => {


  const { party, quantities, hsn_details, rates } = data;
  const subtotal = calculateSubtotal(quantities[0], rates[0]);
  const cgstAmount = calculateTax(subtotal, hsn_details[0].cgst);
  const sgstAmount = calculateTax(subtotal, hsn_details[0].sgst);
  const total = calculateTotal(subtotal, cgstAmount, sgstAmount);

  return (
    <div className="p-4 md:p-6 max-w-5xl mx-auto border rounded shadow-lg bg-white overflow-x-auto" >
      <InvoiceHeader companyName="My Company" city={party.principal_address.city} state={party.principal_address.state} pincode={party.principal_address.pincode} />
      <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
        <div>
          <p><strong>Reverse Charge:</strong> No</p>
          <p><strong>Invoice No:</strong> 1</p>
          <p><strong>Invoice Date:</strong> 05-02-2025</p>
        </div>
        <InvoiceActions />
      </div>
      <InvoiceDetails party={party} />
      <InvoiceTable hsnDetails={hsn_details} quantities={quantities} rates={rates} subtotal={subtotal} cgstAmount={cgstAmount} sgstAmount={sgstAmount} total={total} />
      <InvoiceFooter total={total} />
    </div>
  );
};

export default Invoice;
