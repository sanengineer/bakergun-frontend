import React, { Component } from "react";
import NavbarTop from "../components/NavbarTop";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Requirements from "../components/Requirements";
import Quotes from "../components/Quotes";
import Features from "../components/Features";
import Newsletter from "../components/Newsletter";

import "../assets/scss/style.scss";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarTop />
        <Hero />
        <AboutUs />
        <Requirements />
        <Quotes />
        <Features />
        <Newsletter />
      </div>
    );
  }
}
