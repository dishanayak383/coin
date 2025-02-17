import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment-container">
      <div className="header">
        <div className="logo">AceCoinPay</div>
        <div className="timer">01:19</div>
      </div>
      <form>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" placeholder="Enter the 16-digit card number" />
        </div>
        <div className="form-group">
          <label>CVV Number</label>
          <input type="text" placeholder="Enter 3 or 4 digit CVV" />
        </div>
        <div className="form-group expiry">
          <div>
            <label>Expiry Month</label>
            <input type="text" placeholder="MM" />
          </div>
          <div>
            <label>Expiry Year</label>
            <input type="text" placeholder="YY" />
          </div>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Dynamic password" />
        </div>
        <button className="pay-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentForm;
