import "../style/pages/Dashboard.scss";

import Navbar from "../components/Navbar";

import React from "react";
import CarouselHome from "../components/CarouselHome";
import CategoryList from "../components/CategoryList";
import ProductCard from "../components/ProductCard";

import axios from "axios";

function Dashboard() {
  const [newProductList, setNewProductList] = React.useState([]);
  const [popularProductList, setPopularProductList] = React.useState([]);
  const [keyword, setKeyword] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/`)
      .then((response) => {
        const newProductData = response?.data?.data;
        setNewProductList(newProductData);
      });

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/`)
      .then((response) => {
        const popularProductData = response?.data?.data;
        setPopularProductList(popularProductData);
      });
  }, []);

  
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
              {
                newProductList?.length > 0 ? (
                  newProductList.map((newProduct) => (
                    <div className="col">
                      <ProductCard
                        productId={newProduct?.product_id}
                        image={newProduct?.path?.[0]?.photo_path}
                        title={newProduct?.product_name}
                        price={newProduct?.product_price}
                        storeName={"Code Crafters"}
                        rating={"4.8"}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                    <p className="text-center">No products found</p>
                  </div>
                )
              }
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
              {

                popularProductList?.length > 0 ? (
                  popularProductList.map((popularProduct) => (
                    <div className="col">
                      <ProductCard
                        productId={popularProduct?.product_id}
                        image={popularProduct?.path?.[0]?.photo_path}
                        title={popularProduct?.product_name}
                        price={popularProduct?.product_price}
                        storeName={"Code Crafters"}
                        rating={"4.8"}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-12 col-md-12 col-lg-12 col-xl-12 mt-5">
                    <p className="text-center">No products found</p>
                  </div>
                )

              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
