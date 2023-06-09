import "../style/components/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <div id="blanja-header" className="row align-items-center">
          <div className="container">
            <div className="row justify-content-around align-items-center">
              <Link className="col-auto me-4" to={"/"}>
                <img
                  src="/assets/logo_blanja.png"
                  alt="logo-blanja"
                  height={40}
                />
              </Link>
              <div className="col ms-4 me-5" style={{ marginRight: "100px" }}>
                <div className="row align-items-center d-flex">
                  <div className="col search">
                    <input
                      type="text"
                      className="form-control border border-2 rounded-pill me-2 decoration-none"
                      placeholder="Search Product"
                    />
                    <FontAwesomeIcon
                      className="ic"
                      icon="magnifying-glass"
                      size="lg"
                      style={{ color: "#A5A5A5" }}
                    />
                  </div>
                  <div className="col-auto filters border border-2 ms-2">
                    <FontAwesomeIcon
                      icon="sliders"
                      size="lg"
                      style={{ color: "#A5A5A5" }}
                    />
                  </div>
                </div>
              </div>
              <div className="action col-auto" style={{ marginLeft: "100px" }}>
                <div className="row align-items-center d-flex">
                  <div className="col-auto me-3">
                    <FontAwesomeIcon
                      icon="shopping-cart"
                      size="lg"
                      style={{ color: "#A5A5A5", cursor: "pointer" }}
                    />
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      class="btn btn-primary border-2 rounded-pill"
                    >
                      Login
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      type="button"
                      class="btn btn-light border-2 border rounded-pill"
                    >
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
