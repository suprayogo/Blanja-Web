import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/components/Sidebar.scss";
function Sidebar() {
  return (
    <>
      {/* This is sidebar START */}
      <main id="sidebar-page">
        <div className="body-background">
          <div className="header">
            <div className="sidebar">
              <div className="user-picture  mt-5">
                <img
                  className="img-responsive object-fit-cover rounded-circle"
                  src="./assets/img/you.png"
                  height="70"
                  width="70"
                />
                <div>
                  <h5 className="h5">Mr bean mark blacker nasution</h5>
                  <FontAwesomeIcon
                    id="ic-pencil"
                    className="ic hide-on-mobile"
                    icon="pencil"
                    size="lg"
                    style={{ color: "#e5e5e5", marginLeft: "10px" }}
                  />

                  <Link className="li  text-decoration-none" to="/profile">
                    Ubah profile
                  </Link>
                </div>
              </div>

              <ul className="mt-5 side-link" id="side-link-list">
                <li>
                  <img src="/assets/img/user.png" />
                  <NavLink
                    className={({ isActive, isPending }) =>
                      `text-decoration-none ${
                        isActive ? "side-link-active" : ""
                      } ${isPending ? "" : "hide-on-mobile"}`
                    }
                    to="/profile"
                  >
                    My account
                  </NavLink>
                </li>

                <li>
                  <img src="/assets/img/location.png" />
                  <NavLink
                    className={({ isActive, isPending }) =>
                      `text-decoration-none ${
                        isActive ? "side-link-active" : ""
                      } ${isPending ? "" : "hide-on-mobile"}`
                    }
                    to="/shipping-address"
                  >
                    Shiping Address
                  </NavLink>
                </li>

                <li>
                  <img src="/assets/img/history.png" />
                  <NavLink
                    className={({ isActive, isPending }) =>
                      `text-decoration-none ${
                        isActive ? "side-link-active" : ""
                      } ${isPending ? "" : "hide-on-mobile"}`
                    }
                    to="/my-order"
                  >
                    My order
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      {/* This is sidebar END */}
    </>
  );
}

export default Sidebar;
