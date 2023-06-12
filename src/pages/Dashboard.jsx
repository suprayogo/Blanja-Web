import "../style/pages/Dashboard.scss";

import Navbar from "../components/Navbar";

import React from "react";
import CarouselHome from "../components/CarouselHome";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="row">
        {/* <div className="row"> */}
        <Navbar />
        {/* </div> */}

        <section id="carousel" className="container">
          <CarouselHome />
        </section>

        <section id="category-list" className="container">
          <div className="container mt-4">
            <CategoryList />
          </div>
        </section>

        <section id="new-product">
          <div className="container mt-4">
            <div className="row">
              <h2 className="fw-bold lh-1">New</h2>
              <p className="text-muted lh-1">You’ve never seen it before!</p>
            </div>
            <div className="row row-cols-md-5 rows-cols-xs-2">
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="popular-product">
          <div className="container mt-4">
            <div className="row">
              <h2 className="fw-bold lh-1">Popular</h2>
              <p className="text-muted lh-1">
                Find clothes that are trending recently
              </p>
            </div>
            <div className="row row-cols-md-5 rows-cols-xs-2">
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
              <div className="col">
                <ProductCard
                  image={"./assets/img/product.jpg"}
                  title={"Men's Leather Jacket - Brown"}
                  price={"100"}
                  storeName={"Code Crafters"}
                  rating={"4.8"}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
