import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentPage() {
  const location = useLocation();
  const { item, price } = location.state || {}; // Retrieve booking details from the state

  return (
    <div>
      <h1>Payment Page</h1>
      {item && price ? (
        <div>
          <p>Booking for: {item}</p>
          <p>Price: {price} pp</p>
          {/* Add your payment form here */}
        </div>
      ) : (
        <p>No booking details found.</p>
      )}
    </div>
  );
}

export default PaymentPage;
