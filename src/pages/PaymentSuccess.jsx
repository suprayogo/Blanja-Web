import "../style/pages/PaymentSuccess.scss";

import React from "react";

function PaymentSuccess() {
  return (
    <div className="PaymentSuccess">
      <div className="card w-45 shadow mb-5 bg-white rounded">
        <div className="card-body p-5">
          <div className="title">
            <h1 className="card-title">Payment Successful</h1>
          </div>
          <div className="sub-title">
            <p className="card-text">
              Your payment has been completed. <br /> Back to application and
              enjoy shopping again. <br /> Thank You ^_^
            </p>
          </div>
          <div className="icon my-5 py-3">
            <img
              id="ic-success"
              src="./assets/icon/ic_checked.svg"
              alt="Success"
            />
          </div>
          <div className="btn-confirm">
            <button
              className="btn btn-primary rounded-pill px-4 py-2"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
