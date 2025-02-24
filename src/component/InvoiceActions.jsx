import React from "react";
import { FaPrint, FaEdit, FaEllipsisH } from "react-icons/fa"; // Import icons

const InvoiceActions = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-end md:space-x-2 space-y-2 md:space-y-0">
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaPrint />
        <span>Print</span>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaEdit />
        <span>Edit</span>
      </button>
      <button className="bg-gray-300 text-black px-4 py-2 rounded flex items-center space-x-2">
        <FaEllipsisH />
        <span>More</span>
      </button>
    </div>
  );
};

export default InvoiceActions;
