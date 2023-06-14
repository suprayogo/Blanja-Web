import React from "react";
import "../style/pages/Register.scss"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/");
    }
  }, []);

  const handleRegister = () => {

    // show loading before axios finish
    Swal.fire({
      title: "Please wait...",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/customer/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then((result) => {
        Swal.fire({
          title: "Register Success",
          text: "Register success, please login...",
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Register Failed",
          text: error?.response?.data?.message ?? "Something wrong in our app",
          icon: "error",
          confirmButtonText: "Ok",
          allowOutsideClick: false,
          timer: 3000,
        });
      });
  };



  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-md-4 col-xs-12">
            <img
              src="./assets/logo.png"
              alt="logo"
              className="rounded mx-auto d-block mb-4"
            />

            <p className="text-center mb-5">
              <b>Please sign up with your account</b>
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
                value="custommer"
                id="custommer"
                autocomplete="off"

                checked
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
                value="seller"
                name="btnradio"
                id="seller"
                autocomplete="off"

              />
              <label
                style={{ height: "50px", width: "150px" }}
                className="btn btn-outline-danger btn-lg"
                for="seller"
              >
                Seller
              </label>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}>
              <div>
                <label for="name" className="form-label"></label>
                <input
                  type="name"
                  className="form-control form-control-lg"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label for="exampleInputEmail1" className="form-label"></label>
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
                  for="exampleInputPassword1"
                  className="form-label"
                ></label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-grid mt-5">
                <button
                  type="submit"
                  className="btn btn-danger btn-lg rounded-pill"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </form>

            <small className="d-block text-center text-muted mt-4">
              Already have a account?
              <Link
                className="text-danger text-decoration-none"
                to={"/login"}
              >
                Login
              </Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
