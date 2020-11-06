import React, { Component } from "react";
import LoginForm from "../components/Login";
import NavbarTop from "../components/NavbarTop";
import Footer from "../components/Footer";

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login-page">
        <NavbarTop />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

// import React from "react";
// import Login from "../elements/Form/login";
// import NavbarTop from "../components/NavbarTop";
// import Footer from "../components/Footer";

// function LoginPage(props) {
//   return (
//     <div className="game-media-query">
//       <NavbarTop />
//       <Login />
//       <Footer />
//     </div>
//   );
// }
