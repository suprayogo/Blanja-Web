import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../style/pages/MyOrder.scss";
import CardOrder from "../../components/myOrder/cardOrder";
import NavbarOrder from "../../components/myOrder/navbarOrder";
function MyOrder() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="my-order">
        <div className="page-content ">
          <div className="container-fluid">
            <h4>My order</h4>
         <NavbarOrder/>
       <CardOrder/>

          </div>
        </div>
      </main>
    </>
  );
}

export default MyOrder;
