// Invoice.jsx
import React from 'react';

const Invoice = ({ invoiceData }) => {
  return (
    <div className="invoice">
      <h1>Invoice</h1>
      <div className="invoice-details">
        <p><strong>Invoice Number:</strong> {invoiceData.invoiceNumber}</p>
        <p><strong>Date:</strong> {invoiceData.date}</p>
        {/* Add more invoice details here */}
      </div>
      <table className="invoice-items">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="invoice-total">
        <p><strong>Total:</strong> {calculateTotal(invoiceData.items)}</p>
      </div>
    </div>
  );
};

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

export default Invoice;
