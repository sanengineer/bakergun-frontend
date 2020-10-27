import React, { Component } from "react";
import LoginForm from "../components/Login";
import NavbarTop from "../components/NavbarTop";

export default class Gameboard extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop />
        <LoginForm />
      </div>
    );
  }
}
