import React from "react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/pages/MyOrder.scss";
function AllItems() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="my-order">
        <div className="page-content ">
          <div className="container-fluid">
            <h4>My order</h4>
            <div className="row mt-3 my-order-nav">
              <div className="col-12 text-link text-decoration-none">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/all-items"
                >
              
                  All items
                </NavLink>

                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/not-yet-paid"
                >
                  Not yet paid
                </NavLink>

                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/packed"
                >
                  Packed
                </NavLink>

                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/sent"
                >
                  Sent
                </NavLink>

                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/completed"
                >
                  Completed
                </NavLink>

                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? " text-decoration-none"
                      : isActive
                      ? "text-on text-decoration-none"
                      : "text-decoration-none"
                  }
                  to="/order-check"
                >
                  Order cancel
                </NavLink>
              </div>
            </div>
            <hr />

            <div className="my-order">
              <h1>My Order History</h1>
              <ul>
                <li>
                <img  className="img-responsive object-fit-cover"  src="./assets/img/pants.png" alt="Product 1" />
                  <div class="order-details">
                    <h2>Order ID: 12345</h2>
                    <p>Product: Example Product 1</p>
                    <p>Quantity: 1</p>
                    <p>Harga: Rp 40.000.000</p>
                    <p className="success-message">Success</p>
                  </div>
                </li>
                <li>
                  <img         className="img-responsive object-fit-cover"  src="./assets/img/dress.png" alt="Product 2" />
                  <div class="order-details">
                    <h2>Order ID: 67890</h2>
                    <p>Product: Example Product 2</p>
                    <p>Quantity: 1</p>
                    <p>Harga: Rp 12.000.000</p>
                    <p className="cancel-message">Cancel</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AllItems;
