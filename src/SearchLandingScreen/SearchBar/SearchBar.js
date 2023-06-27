import React, { useState } from "react";
import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || "healthcare provider");
  const [location, setLocation] = useState(props.location || "");

  const navigate = useNavigate();

  function submit(e) {
    // To clean up the url to be http://localhost:3000/search
    if (!location || !term) {
      navigate("");
      return;
    }

    if (props.onSearchLandingPage) {
      navigate(`?find_desc=${term}&find_loc=${location}`);
    } else {
      navigate(`/search/?find_desc=${term}&find_loc=${location}`);
    }

    if (typeof props.search === "function") {
      props.search([term, location]);
    }
    e.preventDefault();
  }

  const sizeClass = props.small ? "" : "is-medium";
  return (
    <div>
      <div className="row pt-3">
        <div className="col-3">
          <Link to="/" className="text-decoration-none">
            <h3 className="ps-3 fw-bolder text-blue">
              HealthcareReview
              <i className="bi bi-chat text-primary ms-2 bold-icon"></i>
            </h3>
          </Link>
        </div>
        <div className="col-6 pt-1">
          <div className="row">
            <div className={styles.landing}>
              <div className={styles["search-area"]}>
                <form onSubmit={submit}>
                  <div className="field has-addons">
                    <p className="control">
                      <button className={`button is-static ${sizeClass}`}>
                        Search
                      </button>
                    </p>
                    <p className="control">
                      <input
                        className={`input ${sizeClass} ${styles["input-control"]}`}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        value={term}
                        placeholder="healthcare provider"
                      />
                    </p>
                    <div className="control">
                      <div className={`button is-static ${sizeClass}`}>
                        NEAR
                      </div>
                    </div>
                    <p className="control">
                      <input
                        className={`input ${sizeClass} ${styles["input-control"]}`}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        value={location}
                        placeholder="Where"
                      />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 pt-1">
          <h3 className="text-black float-end pe-5">
            {!props.loggedIn && (
              <>
                <div className="control">
                  <div className={`text is-static ${sizeClass}`}>
                    Your next review awaits..
                  </div>
                </div>
                <button className="btn btn-primary me-2 fw-bolder">
                  <Link to="/login" className="text-decoration-none text-white">
                    Log In
                  </Link>
                </button>
                <button className="btn btn-danger fw-bolder">
                  <Link
                    to="/signup"
                    className="text-decoration-none text-white"
                  >
                    Sign Up
                  </Link>
                </button>
              </>
            )}
            {props.loggedIn && (
              <>
                <h5>Current User: </h5>
                <input
                  className="form-control mb-2"
                  type="text"
                  value={props.currentUser.username}
                  readOnly
                />
                <button className="btn btn-danger me-2 fw-bolder">
                  <Link
                    to={`/profile/${props.currentUser.username}`}
                    className="text-decoration-none text-black"
                  >
                    Profile
                  </Link>
                </button>
              </>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
}
