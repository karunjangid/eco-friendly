import React from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const { box, category, frequency, plan } = location.state || {}; // Access passed data

  const handleCheckout = () => {
    alert('Checkout successful! Thank you for your order.');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Frequency:</strong> {frequency}</p>
      <p><strong>Plan:</strong> {plan}</p>

      <h3>Your Box</h3>
      <ul>
        {box.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
