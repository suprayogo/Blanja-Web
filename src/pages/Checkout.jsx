import "../style/pages/Checkout.scss";

import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

function Checkout() {
  const [detail, setDetail] = React.useState(JSON.parse(localStorage.getItem("checkout")));
  const [product, setProduct] = React.useState(JSON.parse(localStorage.getItem("product")));

  // Check if auth is empty in local storage and redirect to login page
  if (localStorage.getItem("auth") === null) {
    window.location.href = "/login";
  }

  console.log(detail[0]);
  console.log(product);

  // Function to change price to rupiah format
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }

  // Function to handle buy now button
  const handlePayment = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/create-payment`, {
        total_payment: detail[0].total_price,
      })
      .then((result) => {
        console.log(result);
        window.snap.pay(result?.data?.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Checkout">
      <Navbar />

      <section id="content-checkout" className="container">
        <div className="row mb-3">
          <h2 className="fw-bold lh-1">Checkout</h2>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <div className="row mb-4">
              <h6 className="fw-bold">Shipping Address</h6>
              <div id="card-shipping" className="card mt-1">
                <div className="card-body">
                  <h6 className="card-title">Andreas Jane</h6>
                  <p className="card-text">
                    Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                    Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                    c 16] Sokaraja, Kab. Banyumas, 53181
                  </p>
                  <button
                    id="btn-address"
                    type="button"
                    className="btn btn-light border-2 border rounded-pill"
                  >
                    Choose another address
                  </button>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <h6 className="fw-bold">Items</h6>
              <div id="card-items" className="card mt-1">
                <div className="card-body">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <img
                        className="img-product"
                        src={product?.path[0]?.photo_path}
                        alt="Image Product"
                      />
                    </div>
                    <div className="col-md-7">
                      <h6 className="card-title fw-bold">{product.product_name} - {detail[0].product_color}</h6>
                      <small className="text-muted">Code Crafters</small>
                    </div>
                    <div className="col-md-3 text-end">
                      <h5 className="card-title fw-bold">{formatPrice(product.product_price)}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div id="card-summary" className="card">
              <div className="card-body">
                <h6 className="card-title fw-bold">Shopping Summary</h6>
                <div className="row mt-4 justify-content-between">
                  <div className="col-auto">
                    <h6 className="fw-normal text-muted">Order</h6>
                  </div>
                  <div className="col-auto">
                    <h6 className="fw-bold">{formatPrice(product.product_price)}</h6>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h6 className="fw-normal text-muted">Delivery</h6>
                  </div>
                  <div className="col-auto">
                    <h6 className="fw-bold">{formatPrice(detail[0].shipping_price)}</h6>
                  </div>
                </div>
                <hr className="solid" style={{ borderTop: "2px solid" }} />
                <div className="row justify-content-between">
                  <div className="col-auto">
                    <h6 className="fw-bold">Total</h6>
                  </div>
                  <div className="col-auto">
                    <h6 className="fw-bold" style={{ color: "#db3022" }}>
                      {formatPrice(detail[0].total_price)}
                    </h6>
                  </div>
                </div>
                <button
                  id="btn-payment"
                  type="button"
                  className="btn btn-primary mt-3 border-2 border rounded-pill"
                  onClick={handlePayment}
                >
                  Select payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
