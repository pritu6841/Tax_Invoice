import React from "react";

const InvoiceTable = ({ hsnDetails, quantities, rates, subtotal, cgstAmount, sgstAmount, total }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mt-4 border-collapse border border-gray-400 text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 md:px-4 py-2">S.No</th>
            <th className="border px-2 md:px-4 py-2">Name of Product</th>
            <th className="border px-2 md:px-4 py-2">HSN/SAC</th>
            <th className="border px-2 md:px-4 py-2">QTY</th>
            <th className="border px-2 md:px-4 py-2">Unit</th>
            <th className="border px-2 md:px-4 py-2">Rate</th>
            <th className="border px-2 md:px-4 py-2">Taxable Value</th>
            <th className="border px-2 md:px-4 py-2">IGST</th>
            <th className="border px-2 md:px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 md:px-4 py-2">1</td>
            <td className="border px-2 md:px-4 py-2">{hsnDetails[0].product_info}</td>
            <td className="border px-2 md:px-4 py-2">{hsnDetails[0].hsn_code}</td>
            <td className="border px-2 md:px-4 py-2">{quantities[0]}</td>
            <td className="border px-2 md:px-4 py-2">{hsnDetails[0].unit}</td>
            <td className="border px-2 md:px-4 py-2">₹{rates[0].toFixed(2)}</td>
            <td className="border px-2 md:px-4 py-2">₹{subtotal.toFixed(2)}</td>
            <td className="border px-2 md:px-4 py-2">₹{(cgstAmount + sgstAmount).toFixed(2)}</td>
            <td className="border px-2 md:px-4 py-2">₹{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
