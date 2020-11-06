import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import UserDashboard from "./pages/UserDashboard";

// import "./assets/scss/game.scss";
import "./assets/scss/style.scss";

import { AuthContext } from "./context/auth";

const initialState = {
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
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        success: null,
      };
    default:
      return state;
  }
};

function App(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    const success = JSON.parse(localStorage.getItem("success") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (success && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          success,
          token,
        },
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />

        <Route path="/game" component={GamePage} />

        <Route path="/dashboard" component={UserDashboard} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
