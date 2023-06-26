import { Link, useNavigate } from "react-router-dom";
import * as service from "../../services/auth-service";
import React, { useState } from "react";

function Signup() {
  const [newUser, setNewUser] = useState({});
  // const [accountType, setAccountType] = useState("");
  // const [secretKey, setSecretKey] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [error, setError] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    // if (accountType === "ADMIN" && secretKey !== "cs5610") {
    //   e.preventDefault();
    //   alert("Invalid Admin");
    // } else {
    //   e.preventDefault();
    //   console.log(
    //     firstName,
    //     lastName,
    //     username,
    //     email,
    //     accountType,
    //     password,
    //     zipcode,
    //     dateOfBirth
    //   );
    //   fetch("http://localhost:4000/api/auth/signup", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({
    //       accountType,
    //       username,
    //       password,
    //       email,
    //       firstName,
    //       lastName,
    //       zipcode,
    //       dateOfBirth,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data, "userRegister");
    //       if (data.message === "Success") {
    //         // window.localStorage.setItem("token", data.data);
    //         navigate(`/profile/${username}`);
    //       } else {
    //         alert("USER ALREADY EXISTS USE DIFFERENT EMAIL ID");
    //         navigate("/signup");
    //       }
    //     });

    const user = {
      ...newUser,
      joined: new Date().getDate(),
      followings: 0,
      followers: 0,
    };
    service
      .signup(user)
      .then(() => navigate(`/profile/${user.username}`))
      .catch((e) => alert(e));
  };

  return (
    <div>
      <div className="login-banner bg-primary">
        <Link to="/" className="text-decoration-none">
          <h1 className="fw-bolder text-white text-left pt-1">
            HealthcareReview
            <i className="bi bi-chat ms-2" />
          </h1>
        </Link>
      </div>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div
            className="col-12 col-md-10 col-lg-7 col-xl-6 flex-container"
            style={{ position: "relative" }}
          >
            <div className="signup-form-container">
              <div className="header">
                <h2 className="login-title fw-bold">Sign Up</h2>
              </div>
              {/* <div>
                Register As
                <input
                  className="mb-2"
                  type="radio"
                  name="AccountType"
                  value="PERSONAL"
                  onChange={(e) => setAccountType(e.target.value.accountType)}
                />
                PERSONAL
                <input
                  className="mb-2"
                  type="radio"
                  name="AccountType"
                  value="ADMIN"
                  onChange={(e) => setAccountType(e.target.value.accountType)}
                />
                ADMIN
              </div>

              {accountType === "Admin" ? (
                <div className="mb-3">
                  <label>Secret Key</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Secret Key"
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              ) : null} */}

              <div className="mt-2">
                <input
                  className="mb-2 form-control"
                  placeholder="First Name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, firstName: e.target.value })
                  }
                />
                <input
                  className="mb-2 form-control"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setNewUser({ ...newUser, lastName: e.target.value })
                  }
                />
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, username: e.target.value })
                  }
                  placeholder="username"
                />
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                  placeholder="password"
                  type="password"
                />
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  placeholder="Email"
                />
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, zipcode: e.target.value })
                  }
                  placeholder="ZIP code"
                />
                <div className="label-birth">
                  <label>Birthday</label>
                </div>
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, dateOfBirth: e.target.value })
                  }
                  type="Date"
                />
                <button onClick={signup} className="btn btn-danger btn-width">
                  Register
                </button>
              </div>
              <div className="sub-text-box">
                <small>
                  Already on HealthcareReview?{" "}
                  <a className="no-decoration" href="/login">
                    Log in
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-6 col-md-6 col-lg-5 col-xl-6">
            <div className="picture-container">
              <img src="/images/signup.jpeg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
