import React, { Component } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Game from "../components/Game";
import PrivateAnchor from "../elements/PrivateAnchor";

export default class Gameboard extends Component {
  render() {
    return (
      <PrivateAnchor>
        <div className="game-media-query">
          <NavbarBottom />
          <Game />
        </div>
      </PrivateAnchor>
    );
  }
}

// function Gameboard(props) {
//   const { setAuthTokens } = useAuth();

//   function logout() {
//     setAuthTokens;
//   }

//   return (
//     <div className="game-media-query">
//       <NavbarBottom />
//       <Game />
//     </div>
//   );
// }

// export default Gameboard;
