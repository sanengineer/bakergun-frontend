import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class NavbarTop extends Component {
  render() {
    return (
      <nav className="top-nav navbar navbar-expand-xl navbar-dark fixed-top py-3">
        <div className="container-xl">
          <Link className="logo-in-topnav navbar-brand" to="/">
            <img src="" alt="Logo Bakergun"/>
          </Link>
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
                <Link className="nav-link text-uppercase" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item pr-5">
                <Link className="nav-link text-uppercase" to="/#aboutUsSection">About</Link>
              </li>
              <li className="nav-item pr-5">
                <Link className="nav-link text-uppercase" to="/#featuresSection">Feature</Link>
              </li>
              <li className="nav-item pr-5">
                <Link className="nav-link text-uppercase" to="/blog">Blog</Link>
              </li>
              <li className="nav-item pr-5">
                <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav d-lg-flex order-4">
              <li className="san-btn-sm">
                <Link className="san-green nav-link text-uppercase" to="#">Sign Up</Link>
              </li>
              <li className="san-btn-sm">
                <Link className="san-yellow nav-link text-uppercase" to="#">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
