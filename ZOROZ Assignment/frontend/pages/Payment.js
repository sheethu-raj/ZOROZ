import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/Payment.css';

function Payment() {
  const search = new URLSearchParams(useLocation().search);
  const success = search.get('success') === 'true';

  return (
    <div className="payment-result">
      {success ? (
        <h1 className="payment-success">Payment Successful</h1>
      ) : (
        <h1 className="payment-failure">Payment Failed</h1>
      )}
    </div>
  );
}

export default Payment;