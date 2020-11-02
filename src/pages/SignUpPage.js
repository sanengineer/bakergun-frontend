import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import SignUpForm from "../components/SignUp";
import Footer from "../components/Footer";

export default class SignUpPage extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop />
        <SignUpForm />
        <Footer />
      </div>
    );
  }
}
