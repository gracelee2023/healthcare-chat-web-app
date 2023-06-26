import { Link, useNavigate } from "react-router-dom";
import * as service from "../../services/auth-service";
import React, { useState } from "react";

function Login() {
  const [loginUser, setLoginUser] = useState({});
  const navigate = useNavigate();
  const login = () => {
    service
      .login(loginUser)
      .then((user) => navigate("/"))
      .catch((e) => alert(e));
  };

  return (
    <div>
      <div className="login-banner bg-primary">
        <Link to="/" className="text-decoration-none">
          <h1 className="fw-bolder text-white text-left pt-1">
            HealthcareReview
            <i className="bi bi-chat ms-2"></i>
          </h1>
        </Link>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-12 col-md-6 col-lg-6 col-xl-6 flex-container"
            style={{ position: "relative" }}
          >
            <div className="signup-form-container">
              <div className="header">
                <h2 className="login-title fw-bold">Log In</h2>
              </div>
              <div className="mt-2">
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, username: e.target.value })
                  }
                  placeholder="username"
                />
                <input
                  className="mb-2 form-control"
                  onChange={(e) =>
                    setLoginUser({ ...loginUser, password: e.target.value })
                  }
                  placeholder="password"
                  type="password"
                />
                <button onClick={login} className="btn btn-danger btn-width">
                  Login
                </button>
              </div>
              <div className="sub-text-box">
                <small>
                  New to HealthcareReview?{" "}
                  <a className="no-decoration" href="/signup">
                    Sign up
                  </a>
                </small>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-6 col-md-6 col-lg-5 col-xl-6">
            <div className="picture-container">
              <img src="/images/login.jpeg" width={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
