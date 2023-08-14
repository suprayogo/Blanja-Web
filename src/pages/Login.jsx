import React, { useState, useEffect } from "react";
import "../style/pages/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addAuth } from "../reducers/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("customer");

  const state = useSelector((reducer) => reducer.auth);

  useEffect(() => {
    if (localStorage.getItem("auth") === "true" || state.auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = () => {
    const validations = [
      {
        field: email,
        label: "Email",
        required: true,
        pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        errorMsg: "Please enter a valid email address",
      },
      {
        field: password,
        label: "Password",
        minLength: 3,
        maxLength: 50,
      },
    ];

    let isValid = true;

    for (const validation of validations) {
      const {
        field,
        label,
        minLength,
        maxLength,
        pattern,
        required,
        errorMsg,
      } = validation;

      if (required && !field) {
        isValid = false;
        Swal.fire({
          title: "Validation Error",
          text: `Please enter ${label}`,
          icon: "error",
        });
        return;
      }

      if (field && (field.length < minLength || field.length > maxLength)) {
        isValid = false;
        Swal.fire({
          title: "Validation Error",
          text: `${label} must be between ${minLength} and ${maxLength} characters`,
          icon: "error",
        });
        return;
      }

      if (pattern && field && !pattern.test(field)) {
        isValid = false;
        Swal.fire({
          title: "Validation Error",
          text: errorMsg,
          icon: "error",
        });
        return;
      }
    }

    Swal.fire({
      title: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    if (isValid) {
      const loginUrl =
        userType === "customer"
          ? `${process.env.REACT_APP_BASE_URL}/customer/login`
          : `${process.env.REACT_APP_BASE_URL}/seller/login`;

      axios
        .post(loginUrl, {
          user_email: email,
          user_password: password,
        })
        .then((result) => {
          Swal.fire({
            title: "Login Success",
            text: "Login success, redirect to app...",
            icon: "success",
          }).then(() => {
            console.log(result);
            localStorage.setItem("auth", "true");
            localStorage.setItem("userId", result?.data?.data[0].user_id);
            localStorage.setItem("userName", result?.data?.data[0].user_name);
            localStorage.setItem("userPhoto", result?.data?.data[0].user_photo);
            localStorage.setItem("token", result?.data?.token);
            localStorage.setItem("roles_id", result?.data?.data[0].roles_id);
            dispatch(addAuth(result.data));
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Login Failed",
            text:
              error?.response?.data?.message ?? "Something wrong in our app",
            icon: "error",
          });
        });
    }
  };

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
                name="btnradio"
                id="custommer"
                autoComplete="off"
                checked={userType === "customer"}
                onChange={() => setUserType("customer")}
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                htmlFor="custommer"
              >
                Custommer
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="seller"
                autoComplete="off"
                checked={userType === "seller"}
                onChange={() => setUserType("seller")}
              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                htmlFor="seller"
              >
                Seller
              </label>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div>
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label"
                ></label>
                <input
                  type="password"
                  className="form-control  form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <small>
                <Link
                  to={"/forget.html"}
                  className="d-block text-decoration-none text-right text-danger mt-3"
                >
                  Forgot Password
                </Link>
              </small> */}

              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg rounded-pill"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>

            <small className="d-block text-center text-muted mt-4">
              Don’t have a account?
              <Link
                className="text-danger text-decoration-none"
                to={"/register"}
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

export default Login;
