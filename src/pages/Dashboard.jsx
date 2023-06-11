import "../style/pages/Dashboard.scss";

import Navbar from "../components/Navbar";

import React from "react";
import CarouselHome from "../components/CarouselHome";
import CategoryList from "../components/CategoryList";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="row">
        {/* <div className="row"> */}
        <Navbar />
        {/* </div> */}

        <section id="carousel" className="container">
          <div className="row">
            <div className="col-12">
              <CarouselHome />
            </div>
          </div>
        </section>

        <section id="category-list">
          <div className="container mt-4">
            <CategoryList />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
