import React, { Component } from 'react'
import Axios from "axios";

const api = Axios.create({
    baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
  });


class Login extends Component {
    render() {
        return (
            <section className="login-page-section" >
      <div className="login-page-bg">
        <div className="login-page-content container">
          <div className="row">
            <div className="login-page-text-box">
              <h2 className="login-page-h2">Login</h2>
              <p className="login-paget-par">
                Let's Login and Play !
              </p>
              <form className="ml-0">
                <div className="form-email-box col-12 mb-3">
                    <label for="userName" className="email-label"
                      >Username</label
                    >
                    <input
                      type="text"
                      className="form-control"
                      aria-describedby="nameHelp"
                      placeholder="radeonvega56"
                    >
                    </input>
                  </div>
                <div className="form-email-box col-12 mb-3">
                    <label for="yourPassword" className="email-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      className="form-control"
                      aria-describedby="passwordHelp"
                      placeholder="*********"
                    >
                    </input>
                  </div>
                <div className="col-8 mb-3 mt-5 p-0">
                  <button type="submit" className="login-pagebut btn btn-dark w-100">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
        )
    }
}

export default Login;