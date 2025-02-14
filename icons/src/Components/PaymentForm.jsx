import React from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  return (
    <div className="payment-container">
      <div className="payment-header">
        <h2>AceCoinPay</h2>
        <div className="timer">01:19</div>
      </div>
      <form className="payment-form">
        <div className="input-group">
          <label>Card Number</label>
          <input type="text" placeholder="2412 - 7512 - 3412 - 3456" disabled />
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>CVV Number</label>
            <input type="text" placeholder="327" />
          </div>
          <div className="input-group">
            <label>Expiry Date</label>
            <div className="expiry">
              <input type="text" placeholder="09" />
              <span>/</span>
              <input type="text" placeholder="22" />
            </div>
          </div>
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button className="pay-button">Pay Now</button>
      </form>
      <div className="payment-summary">
        <div className="card-display">
          <p>Jonathan Michael</p>
          <p>**** 3456</p>
          <p>09/22</p>
        </div>
        <div className="summary-details">
          <p>Company: Apple</p>
          <p>Order Number: 1266201</p>
          <p>Product: MacBook Air</p>
          <p>VAT (20%): $100.00</p>
          <h3>Total: $549.99 USD</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;