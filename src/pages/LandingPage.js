import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import Hero from "../components/Hero";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop />
        <Hero />
      </div>
    );
  }
}
