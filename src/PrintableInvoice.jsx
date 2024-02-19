// PrintableInvoice.jsx
import React from 'react';
import Invoice from './Invoice';

const PrintableInvoice = ({ invoiceData }) => {
  return (
    <div>
      <Invoice invoiceData={invoiceData} />
      <button onClick={() => window.print()}>Print Invoice</button>
    </div>
  );
};

export default PrintableInvoice;
