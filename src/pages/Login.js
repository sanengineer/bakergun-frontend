import React, { Component } from "react";
import LoginForm from "../components/Login";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";

export default class Gameboard extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}
