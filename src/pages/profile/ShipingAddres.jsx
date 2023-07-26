import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../style/pages/ShipingAdress.scss";
import axios from "axios"; 

function ShipingAddres() {
  const [shippingAddress, setShippingAddress] = useState(null);
  const [formData, setFormData] = useState({
    address_name: "",
    recipient_name: "",
    address_data: "",
    postal_code: "",
    city: "",
    recipient_phone_number: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const token = localStorage.getItem("token");

  //   axios
  //     .post("https://puzzled-jade-turtle.cyclic.app/customer/address", formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       if (data.status) {
  //         setShippingAddress(data.data);
  //         setFormData({
  //           address_name: "",
  //           recipient_name: "",
  //           address_data: "",
  //           postal_code: "",
  //           city: "",
  //           recipient_phone_number: "",
  //         });
  //         // const modal = new bootstrap.Modal(
  //         // //   document.getElementById("exampleModal")
  //         // // );
  //         // modal.hide();
  //       } else {
  //         console.error("Failed to add shipping address");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error adding shipping address:", error);
  //     });
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://puzzled-jade-turtle.cyclic.app/customer/address", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.status && data.data.length > 0) {
          setShippingAddress(data.data[0]);
        } else {
          console.error("Failed to fetch shipping address data");
        }
      })
      .catch((error) => {
        console.error("Error fetching shipping address data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />

      <main id="shipping-address">
        <div className="page-content ">
          <div className="custom-button">
            <div className="container-fluid">
              <h4>Choose another address</h4>
              <p>Manage your shipping address</p>
              <hr />

              {/* Button to open the modal */}

              <button
                type="button"
                id="custom-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Address
              </button>

              {/* Bootstrap Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-bs-backdrop="false"
                data-bs-keyboard="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal Title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        {/* ini atas untuk row */}
                        <div className="row">
                          {/* ini dalam untuk row */}
                          <div className="mb-2 ">
                            <label for="allAddress" className="form-label">
                              Save address as (ex : home address, office
                              address)
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="allAddress"
                              placeholder="Rumah"
                            />
                          </div>

                          <div className="col-md-6 ">
                            <div className="mb-2 ">
                              <label for="name" className="form-label">
                                Recipient’s name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                              />
                            </div>

                            <div className="mb-2 ">
                              <label for="address" className="form-label">
                                Address
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                              />
                            </div>
                          </div>

                          <div className="mb-2 col-md-6">
                            <label for="telphone_number" className="form-label">
                              Recipient's telephone number
                            </label>
                            <input
                              type="number"
                              className="form-control mb-2"
                              id="telphone_number"
                            />

                            <label for="postal_code" className="form-label">
                              Postal code{" "}
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="postal_code"
                            />
                          </div>

                          <div className="mb-2 col-md-6">
                            <label for="city" className="form-label">
                              City or Subdistrict{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control mb-2"
                              id="city"
                            />
                          </div>
                        </div>

                        <div class="mb-3 form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />

                          <label class="form-check-label" for="exampleCheck1">
                            Make it the primary address
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           

            {shippingAddress && (
              <div className="box-address mt-2">
                <h4 style={{ color: "black" }}>{shippingAddress.recipient_name}</h4>
                <p>
                  {shippingAddress.address_data}, {shippingAddress.city},{" "}
                  <span>Postal Code: {shippingAddress.postal_code}</span>
                  <span>Recipient's Phone: {shippingAddress.recipient_phone_number}</span>
                </p>
                <span className="btn btn-change-address">Change address</span>
              </div>
            )}
         
          </div>
        </div>
      </main>
    </>
  );
}

export default ShipingAddres;
