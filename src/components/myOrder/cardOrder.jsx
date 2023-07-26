import React from "react";

function CardOrder() {
  return (
    <>
      <div className="my-order">
        <h1>My Order History</h1>
        <ul>
          <li>
            <img
              className="img-responsive object-fit-cover"
              src="./assets/img/pants.png"
              alt="Product 1"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="order-details">
              <h2>Order ID: 12345</h2>
              <p>Product: Example Product 1</p>
              <p>Quantity: 1</p>
              <p>Harga: Rp 40.000.000</p>
              <p className="success-message">Success</p>
            </div>
          </li>
          <li>
            <img
              className="img-responsive object-fit-cover"
              src="./assets/img/dress.png"
              alt="Product 2"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="order-details">
              <h2>Order ID: 67890</h2>
              <p>Product: Example Product 2</p>
              <p>Quantity: 1</p>
              <p>Harga: Rp 12.000.000</p>
              <p className="cancel-message">Cancel</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CardOrder;
