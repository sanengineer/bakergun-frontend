import React, { Component, useState } from "react";
import NavbarTop from "../components/NavbarTop";
import SignUpForm from "../components/SignUp";
import Footer from "../components/Footer";

export default class Gameboard extends Component {
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
