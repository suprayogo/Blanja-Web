import "../style/pages/Detail.scss";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import axios from 'axios';

function Detail() {
  const location = useLocation();
  const [imageId, setImageId] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [countSize, setCountSize] = useState(1);
  const [countAmount, setCountAmount] = useState(1);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const currentId = location.pathname.split("/")[2];
    console.log(currentId);

    window.scrollTo(0, 0);

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/${currentId}`)
      .then((result) => {
        setCurrentProduct(result?.data?.data[0]);
        console.log(currentProduct);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/?category=${currentProduct?.category}`)
      .then((response) => {
        const relatedProductData = response?.data?.data;
        setProductList(relatedProductData);
      });


  }, []);

  useEffect(() => {
    setIsActive(0);
    setImageId(currentProduct?.path[0]?.photo_path);
  }, []);

  const changeImage = (index, img) => {
    setIsActive(index);
    setImageId(img);
  };

  const changeColor = (index) => {
    setSelectedColor(index);
  };

  const incrementSize = () => {
    setCountSize(countSize + 1);
  };

  const decrementSize = () => {
    setCountSize(countSize - 1);
    if (countSize < 2) {
      setCountSize(1);
    }
  };

  const incrementAmount = () => {
    setCountAmount(countAmount + 1);
  };

  const decrementAmount = () => {
    setCountAmount(countAmount - 1);
    if (countSize < 2) {
      setCountAmount(1);
    }
  };

  // Function to handle buy now button
  const handleBuyNow = () => {
    console.log(currentProduct);
    axios
    .post(`${process.env.REACT_APP_BASE_URL}/checkout`, {
        product_id: currentProduct?.id,
        count_size: countSize,
        count_amount: countAmount,
        color_id: selectedColor,
      })
    .then((result) => {
        console.log(result);
      })
    .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="DetailProduct">
      <Navbar />

      <section id="identification" className="container">
        <div className="row">
          <div className="col-4">
            <div className="d-flex mb-3 justify-content-center">
              <img
                className="img-product-big"
                src={imageId}
                alt="Image Product"
              />
            </div>
            <div className="d-flex mt-3 justify-content-center overflow-hidden">
              <div className="col-auto">
                <img
                  className={`img-product-small ${isActive === 0 ? "active" : ""
                    }`}
                  src={currentProduct?.path[0]?.photo_path}
                  alt="Image Product"
                  onClick={(e) =>
                    changeImage(0, currentProduct?.path[0]?.photo_path)
                  }
                />
              </div>
              <div className="col-auto">
                <img
                  className={`img-product-small ${isActive === 1 ? "active" : ""
                    }`}
                  src={currentProduct?.path[1]?.photo_path}
                  alt="Image Product"
                  onClick={(e) =>
                    changeImage(1, currentProduct?.path[1]?.photo_path)
                  }
                />
              </div>
              <div className="col-auto">
                <img
                  className={`img-product-small ${isActive === 2 ? "active" : ""
                    }`}
                  src={currentProduct?.path[2]?.photo_path}
                  alt="Image Product"
                  onClick={(e) =>
                    changeImage(2, currentProduct?.path[2]?.photo_path)
                  }
                />
              </div>
              <div className="col-auto">
                <img
                  className={`img-product-small ${isActive === 3 ? "active" : ""
                    }`}
                  src={currentProduct?.path[3]?.photo_path}
                  alt="Image Product"
                  onClick={(e) =>
                    changeImage(3, currentProduct?.path[3]?.photo_path)
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row ms-2">
              <h2 className="fw-bold">{currentProduct?.product_name}</h2>
              <h6 className="text text-muted">Code Crafters</h6>
              <div className="row my-2">
                <div className="ic-rating col-auto pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="rating col-auto ps-0">
                  <small className="text">(4.8)</small>
                </div>
              </div>
              <h6 className="text fw-light text-muted mt-3">Price</h6>
              <h1 className="fw-bolder">Rp{currentProduct?.product_price}</h1>
              <h6 className="text fw-bold mt-5">Color</h6>
              <div className="row">
                <div
                  className={`d-flex select-color col-auto rounded-circle ${selectedColor === 0 ? "active" : ""
                    }`}
                  onClick={(e) => changeColor(0)}
                >
                  <div
                    className="color-item rounded-circle"
                    style={{ backgroundColor: "#000000" }}
                  />
                </div>
                <div
                  className={`d-flex select-color col-auto rounded-circle ${selectedColor === 1 ? "active" : ""
                    }`}
                  onClick={(e) => changeColor(1)}
                >
                  <div
                    className="color-item rounded-circle"
                    style={{ backgroundColor: "#D84242" }}
                  />
                </div>
                <div
                  className={`d-flex select-color col-auto rounded-circle ${selectedColor === 2 ? "active" : ""
                    }`}
                  onClick={(e) => changeColor(2)}
                >
                  <div
                    className="color-item rounded-circle"
                    style={{ backgroundColor: "#4290D8" }}
                  />
                </div>
                <div
                  className={`d-flex select-color col-auto rounded-circle ${selectedColor === 3 ? "active" : ""
                    }`}
                  onClick={(e) => changeColor(3)}
                >
                  <div
                    className="color-item rounded-circle"
                    style={{ backgroundColor: "#42D86C" }}
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-3">
                  <h6 className="text fw-bold">Size</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <button
                        id="btn-inc-dec"
                        type="button"
                        className="btn btn-primary border-2 rounded-circle"
                        onClick={decrementSize}
                        disabled={countSize === 1 ? true : false}
                      >
                        <FontAwesomeIcon
                          className="ic"
                          icon="minus"
                          size="sm"
                        />
                      </button>
                    </div>
                    <div className="col-auto d-flex justify-content-center align-items-center">
                      <h5 className="lh-1 text-center">{countSize}</h5>
                    </div>
                    <div className="col-auto">
                      <button
                        id="btn-inc-dec"
                        type="button"
                        className="btn btn-primary border-2 rounded-circle"
                        onClick={incrementSize}
                      >
                        <FontAwesomeIcon className="ic" icon="plus" size="sm" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <h6 className="text fw-bold">Amount</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <button
                        id="btn-inc-dec"
                        type="button"
                        className="btn btn-primary border-2 rounded-circle"
                        onClick={decrementAmount}
                        disabled={countAmount === 1 ? true : false}
                      >
                        <FontAwesomeIcon
                          className="ic"
                          icon="minus"
                          size="sm"
                        />
                      </button>
                    </div>
                    <div className="col-auto d-flex justify-content-center align-items-center">
                      <h5 className="lh-1 text-center">{countAmount}</h5>
                    </div>
                    <div className="col-auto">
                      <button
                        id="btn-inc-dec"
                        type="button"
                        className="btn btn-primary border-2 rounded-circle"
                        onClick={incrementAmount}
                      >
                        <FontAwesomeIcon className="ic" icon="plus" size="sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center d-flex mt-5">
                {/* <div className="col-md-3">
                  <button
                    id="btn-chat"
                    type="button"
                    className="btn btn-light border-2 border rounded-pill"
                  >
                    Chat
                  </button>
                </div>
                <div className="col-md-3">
                  <button
                    id="btn-cart"
                    type="button"
                    className="btn btn-light border-2 border rounded-pill"
                  >
                    Add Cart
                  </button>
                </div> */}
                <div className="col-md-6">
                    <button
                      id="btn-buy"
                      type="button"
                      className="btn btn-primary border-2 rounded-pill"
                    >
                      Buy Now
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="information" className="container">
        <div className="row">
          <h2 className="fw-bold">Product Information</h2>
        </div>
        <div id="condition" className="row mt-5">
          <h4>Condition</h4>
          <h4 style={{ color: "#DB3022" }}>{currentProduct?.product_condition}</h4>
        </div>
        <div id="description" className="row mt-5">
          <h4>Description</h4>
          <p className="text text-muted">
            {currentProduct?.product_description}
          </p>
        </div>
        <div id="product-review" className="row mt-5">
          <h4>Product Review</h4>
          <div className="row">
            <div className="col-md-1 d-flex align-items-center me-5">
              <div className="row gx-0">
                <h1>
                  4.8
                  <span
                    className="text text-muted"
                    style={{ fontSize: "1.25rem" }}
                  >
                    /5
                  </span>
                </h1>
                <div className="ic-rating">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row align-items-center">
                <div className="col-auto ps-0 pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;5</small>
                </div>
                <div className="col-md-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "7px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;90</small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-auto ps-0 pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;4</small>
                </div>
                <div className="col-md-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "7px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;50</small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-auto ps-0 pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;3</small>
                </div>
                <div className="col-md-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "7px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;0</small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-auto ps-0 pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;2</small>
                </div>
                <div className="col-md-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "7px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;0</small>
                </div>
              </div>

              <div className="row align-items-center">
                <div className="col-auto ps-0 pe-0">
                  <FontAwesomeIcon
                    id="ic-star"
                    className="ic"
                    icon="star"
                    size="sm"
                  />
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;1</small>
                </div>
                <div className="col-md-3">
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ height: "7px" }}
                  >
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
                <div className="col-auto ps-0 pe-0">
                  <small>&nbsp;0</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 mb-5">
        <hr className="solid" style={{ borderTop: "2px solid" }} />
      </div>

      <section id="same-category">
        <div className="container mt-4">
          <div className="row">
            <h2 className="fw-bold lh-1">You can also like this</h2>
            <p className="text-muted lh-1">You’ve never seen it before!</p>
          </div>
          <div className="row row-cols-md-5 rows-cols-xs-2">
            {
              productList.map((product) => (
                <div className="col">
                  <ProductCard
                    productId={product?.product_id}
                    image={product?.path[0].photo_path}
                    title={product?.product_name}
                    price={product?.product_price}
                    storeName={"Code Crafters"}
                    rating={"4.8"}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detail;
