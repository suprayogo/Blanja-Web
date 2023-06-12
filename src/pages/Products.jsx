import "../style/pages/ProductList.scss";

import React from "react";

import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="ProductList">
      <Navbar />

      <section id="category">
        <div className="container mt-4">
          <div className="row">
            <h2 className="fw-bold lh-1">Jacket</h2>
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
  );
}

export default Products;
