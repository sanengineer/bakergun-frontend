import React, { Component } from "react";
import Axios from "axios";

import LoginForm from "../elements/Form/login";

const api = Axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
});

class Login extends Component {
  state = {
    imageBg: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);

      this.setState({
        imageBg: res.data[26],
      });
    });
  }

  render() {
    return (
      <section className="login-page-section">
        <div
          className="login-page-bg"
          style={{ backgroundImage: `url(${this.state.imageBg})` }}
        >
          <div className="login-page-content container">
            <div className="row">
              <div className="login-page-text-box">
                <h2 className="login-page-h2">Login</h2>
                <p className="login-paget-par">Let's Login and Play !</p>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
