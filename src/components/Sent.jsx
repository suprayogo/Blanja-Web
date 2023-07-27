import React from "react";
import Sidebar from "../components/Sidebar";
import NavbarOrder from "./myOrder/navbarOrder";
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
    <NavbarOrder/>

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
