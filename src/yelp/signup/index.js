import { Link, useNavigate } from "react-router-dom";
import * as service from "../../services/auth-service";
import React, { useState } from "react";

function Signup() {
  const [newUser, setNewUser] = useState({});

  const navigate = useNavigate();

  const signup = () => {
    if (newUser.accountType === "ADMIN" && newUser.secretKey !== "admin") {
      alert("Invalid Admin");
      return;
    }
    const user = {
      ...newUser,
      joined: new Date().getDate(),
      followings: 0,
      followers: 0,
    };
    service
      .signup(user)
      .then(() => {
        if (user.accountType === "ADMIN") {
          navigate("/profile/admin");
        } else {
          navigate(`/profile/${user.username}`);
        }
      })
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

              <div className="mt-2">
                <select
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setNewUser({ ...newUser, accountType: e.target.value })
                  }
                >
                  <option value="">Select Account Type</option>
                  <option value="PERSONAL">Personal</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {newUser.accountType === "ADMIN" && (
                  <input
                    className="mb-2 form-control"
                    onChange={(e) =>
                      setNewUser({ ...newUser, secretKey: e.target.value })
                    }
                    placeholder="Secret Key"
                    type="password"
                  />
                )}

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
