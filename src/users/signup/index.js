import { Link, useNavigate } from "react-router-dom";
import * as service from "../../services/auth-service";
import React, { useState } from "react";

function Signup() {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();
  const signup = () => {
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
      <div className="bg-primary">
        <Link to="/" className="text-primary">
          <h1 className="fw-bolder text-white text-left pt-1">
            EventChat
            <i className="bi bi-chat ms-2"></i>
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
                <h2 className="login-title text-danger fw-bold">Sign Up</h2>
              </div>
              <div>
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
                {/* <input
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
                /> */}
                <button onClick={signup} className="btn btn-danger btn-width">
                  Sign up
                </button>
              </div>
              <div className="sub-text-box">
                <small>
                  Already on EventChat?{" "}
                  <a className="no-decoration fw-bold" href="/login">
                    Log in
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-6 col-md-6 col-lg-5 col-xl-6">
            <div className="picture-container">
              <img src="/images/signup.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
