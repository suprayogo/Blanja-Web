import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../style/pages/Profile.scss";
import axios from 'axios';

function Profile() {
  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    user_phonenumber: "",
    gender: "",
    date_of_birth: "",
  });

  useEffect(() => {
    // Fetch user data from the API using the token from localStorage
    const token = localStorage.getItem("token");
  
    axios
      .get("https://puzzled-jade-turtle.cyclic.app/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.status) {
          // If the API call is successful, update the state with the user data
          setUserData({
            user_name: data.data.user_name,
            user_email: data.data.user_email,
            user_phonenumber: data.data.user_phonenumber,
            gender: data.data.gender || "", // Handle null gender
            date_of_birth: data.data.date_of_birth || "", // Handle null date_of_birth
          });
        } else {
          // Handle error, e.g., invalid token or API response
          console.error("Failed to fetch user data");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);
  

  return (
    <>
      <Navbar />
      <Sidebar />
      <main id="profile-page">
        <div className="page-content">
          <div className="container-fluid">
            <h4 className="d-none d-md-block">My Profile</h4>
            <p className="d-none d-md-block">Manage your profile information</p>
            <hr className="d-none d-md-block" />

            <form action="">
              {/* ... Existing form fields ... */}

              <div className="mb-2 row ">
                <label htmlFor="name" className="col-sm-3 col-form-label">
                  Name
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={userData.user_name}
                    
                  />
                </div>
              </div>

              <div className="mb-2 row ">
                <label htmlFor="email" className="col-sm-3 col-form-label">
                  Email
                </label>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={userData.user_email}
                    
                  />
                </div>
              </div>

              <div className="mb-2  row ">
                <label htmlFor="phone_number" className="col-sm-3 col-form-label">
                  Phone number
                </label>
                <div className="col">
                  <input
                    type="number"
                    className="form-control"
                    id="phone_number"
                    value={userData.user_phonenumber}
      
                  />
                </div>
              </div>

              <div className="col-md-8 mobile-position ">
                <div className=" row ">
                  <label htmlFor="radio" className="col-sm-3 col-form-label ">
                    Gender
                  </label>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                        checked={userData.gender === "Laki-laki"}
                        
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Laki-laki
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                        checked={userData.gender === "Perempuan"}
                        
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 mobile-position">
                <div className="mb-3 row">
                  <label htmlFor="date" className="col-sm-3 col-form-label">
                    Date
                  </label>

                  <div className="col-12 col-md-5">
                    <div className="input-group date">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={userData.date_of_birth}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-md-primary btn-sm-primary mt-2">
                Save
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
