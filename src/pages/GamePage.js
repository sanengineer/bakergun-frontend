import React, { Component } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Game from "../components/Game";

export default class Gameboard extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarBottom />
        <Game />
      </div>
    );
  }
}
