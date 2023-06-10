import React from "react";
import "../style/pages/Login.scss"
import { Link } from "react-router-dom";

function LoginSeller() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-xs-12">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="rounded mx-auto d-block mb-4"
            />

            <p className="text-center mb-5">
              <b>Please login with your account</b>
            </p>
            <div
              className="btn-group position-relative top-0 start-50 translate-middle mx-auto mt-3"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                onclick="window.location.to ='login.html'"
                name="btnradio"
                id="custommer"
                autocomplete="off"
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                for="custommer"
              >
                Custommer
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="seller"
                autocomplete="off"
                checked
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                for="seller"
              >
                Seller
              </label>
            </div>
            <form>
              <div>
                <label for="exampleInputEmail1" className="form-label"></label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputPassword1"
                  className="form-label"
                ></label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <small>
                <Link
                  to={"/forget"}
                  className="d-block text-decoration-none text-danger text-right mt-3"
                >
                  Forgot Password
                </Link>
              </small>

              <div className="d-grid mt-3">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg rounded-pill"
                >
                  Login
                </button>
              </div>
            </form>

            <small className="d-block text-center text-muted mt-4">
              Don’t have a account?
              <Link
                className="text-danger text-decoration-none"
                to={"/register-seller"}
              >
                Register
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSeller;
