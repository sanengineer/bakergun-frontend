import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import SignUpForm from "../components/SignUp";

export default class Gameboard extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop/>
        <SignUpForm />
      </div>
    );
  }
}
