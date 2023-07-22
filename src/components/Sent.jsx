import React from "react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/pages/MyOrder.scss";
function Sent() {
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
                  to="/order-cancel"
                >
                  Order cancel
                </NavLink>
              </div>
            </div>
            <hr />

            <div className="my-order">
              <h1>Empty</h1>
            


            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sent;
