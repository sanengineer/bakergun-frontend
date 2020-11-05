import React, { createContext, useContext } from "react";
import NavbarBottom from "../components/NavbarBottom";
import Game from "../components/Game";

import { AuthContext } from "../context/auth";
import { Redirect } from "react-router-dom";

const GameContext = createContext();

const intialState = {
  isAuthenticated: false,
  success: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("success", JSON.stringify(action.payload.success));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        success: action.payload.success,
        token: action.payload.token,
      };
    default:
      return state;
  }
};

export default function GamePage() {
  const { state: authState } = useContext(AuthContext);
  // const token = JSON.parse(localStorage.setItem("token"));
  const [state, dispatch] = React.useReducer(reducer, intialState);
  React.useEffect(() => {
    fetch(
      "https://bakergun-backend-service-users.herokuapp.com/api/v1/user-game-history",
      {
        headers: {
          Authorization: `${authState.token}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw res;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [authState.token]);

  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {state.isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <div className="game-media-query">
          <NavbarBottom />
          <Game />
        </div>
      )}
    </GameContext.Provider>
  );
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
