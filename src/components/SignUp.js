import React, { Component } from "react";
import Axios from "axios";
import Pulse from "react-reveal/Pulse";

import SignUpForm from "../elements/Form/signup";
const api = Axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1/images`,
});

class SignUp extends Component {
  state = {
    image: "",
    altImg: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({
        imageBg: res.data[36].imageUrl,
        altImg: res.data[36].name,
      });
    });
  }

  render() {
    return (
      <section class="signup-page-section" id="signupPagetSection">
        <div class="signup-page-bg">
          <div class="signup-page-content container">
            <div class="row">
              <div class="signup-page-text-box">
                <h2 class="signup-page-h2">Sign Up</h2>
                <p class="signup-paget-par">More Benefit with Sign Up</p>
                <SignUpForm />
              </div>
              <div class="feat-img">
                <Pulse>
                  <img
                    id="signUpFeatureImage"
                    class="signup-page-img-self"
                    src={this.state.imageBg}
                    alt={this.state.altImg}
                  />
                </Pulse>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;
