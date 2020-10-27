import React, { Component } from 'react'
import Axios from 'axios'

const api = Axios.create({
    baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
  });


class SignUp extends Component {

state = {
  image: "",
  altImg: ""
}

componentDidMount(){
  api.get("/").then((res)=>{
    console.log(res.data)
    this.setState({
      imageBg: res.data[36].imageUrl,
      altImg: res.data[36].name
    })
  })
}
    
render(){
    return(
        <section class="signup-page-section" id="signupPagetSection">
      <div class="signup-page-bg" >
        <div class="signup-page-content container">
          <div class="row">
            <div class="signup-page-text-box">
              <h2 class="signup-page-h2">Sign Up</h2>
              <p class="signup-paget-par">
                More Benefit with Sign Up
              </p>
              <form class="ml-0">
                <div class="form-email-box col-12 mb-3">
                    <label for="userName" class="email-label"
                      >Username</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="yourName"
                      aria-describedby="nameHelp"
                      placeholder="radeonvega56"
                    >
                    </input>
                </div>
                <div class="form-email-box col-12 mb-3">
                  <label for="yourName" class="email-label"
                    >Full Name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="yourName"
                    aria-describedby="nameHelp"
                    placeholder="Radeon Vega"
                  >
                  </input>
                </div>
                <div class="form-email-box col-12 mb-3">
                  <label for="yourEmailAddress" class="email-label"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="yourEmailAddress"
                    aria-describedby="emailHelp"
                    placeholder="radeon@binar.co.id"
                  >
                  </input>
                </div>
                <div class="form-email-box col-12 mb-3">
                    <label for="yourPassword" class="email-label"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="yourPassword"
                      aria-describedby="passwordHelp"
                      placeholder="*********"
                    >
                    </input>
                  </div>
                <div class="col-8 mb-3 mt-5 p-0">
                  <button type="submit" class="signup-pagebut btn btn-dark w-100">Submit</button>
                </div>
              </form>
            </div>
            <div class="feat-img">
              <img
                id="signUpFeatureImage"
                class="signup-page-img-self"
                src={this.state.imageBg}
                alt="Featured Image Sign Up Page"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

}

export default SignUp