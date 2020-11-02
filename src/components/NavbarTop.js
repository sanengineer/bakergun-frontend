import React, { useContext } from "react";
import { Link } from "react-router-dom";
import IconNavTop from "../components/IconNavtop";
import { AuthContext } from "../context/auth";

export default function NavbarTop() {
  const { state, dispatch } = useContext(AuthContext);
  return (
    <nav className="top-nav navbar navbar-expand-xl navbar-dark fixed-top py-3">
      <div className="container-xl">
        <IconNavTop />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item pr-5 active">
              <Link className="nav-link text-uppercase" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link className="nav-link text-uppercase" to="/#aboutUsSection">
                About
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link className="nav-link text-uppercase" to="/#featuresSection">
                Feature
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link className="nav-link text-uppercase" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item pr-5">
              <Link className="nav-link text-uppercase" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-lg-flex order-4">
            <li className="san-btn-sm">
              <Link className="san-green nav-link text-uppercase" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="san-btn-sm">
              {!state.isAuthenticated ? (
                <Link
                  className="san-yellow nav-link text-uppercase"
                  to="/login"
                >
                  Login
                </Link>
              ) : (
                <Link
                  onClick={() =>
                    dispatch({
                      type: "LOGOUT",
                    })
                  }
                  className="san-yellow nav-link text-uppercase"
                >
                  {state.success.true}Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
