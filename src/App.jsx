import React, { useEffect, useState } from "react";
import Invoice from "./component/Invoice"; // Import Invoice Component

const App = () => {
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    // Fetch the invoice data from JSON file (or API)
    fetch("/invoiceData.json")
      .then(response => response.json())
      .then(data => setInvoiceData(data))
      .catch(error => console.error("Error fetching invoice data:", error));
  }, []);

  return (
    <div>
      {invoiceData ? <Invoice data={invoiceData} /> : <p>Loading invoice...</p>}
    </div>
  );
};

export default App;
