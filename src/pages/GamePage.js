import React, { Component } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Game from "../components/Game";

export default class GamePage extends Component {
  render() {
    return (
      <div className="game-media-query">
        <NavbarBottom />
        <Game />
      </div>
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
