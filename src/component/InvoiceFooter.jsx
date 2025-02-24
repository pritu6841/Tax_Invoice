import React from "react";
import { FaMoneyCheckAlt, FaFileInvoice, FaTruck, FaBell, FaPalette, FaClipboardList } from "react-icons/fa"; // Import icons

const InvoiceFooter = ({ total }) => {
  return (
    <div className="flex flex-col items-end space-y-2 mt-6">
      <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center space-x-2">
        <FaMoneyCheckAlt />
        <span>Record Payment</span>
      </button>
      <button className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2">
        <FaFileInvoice />
        <span>E-invoice</span>
      </button>
      <button className="bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2">
        <FaTruck />
        <span>E-Waybill</span>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaBell />
        <span>Send Payment Reminder</span>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaPalette />
        <span>Change Template</span>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaClipboardList />
        <span>Invoice Logs</span>
      </button>
      <h3 className="mt-4 text-right font-bold">Total Invoice Value: ₹{total.toFixed(2)}</h3>
    </div>
  );
};

export default InvoiceFooter;
