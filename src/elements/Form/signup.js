import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from "axios";

function Signup(props) {
  const [isSignUp, setSignUp] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const referer = "/login";

  const apiUsers = Axios.create({
    baseURL: `http://localhost:8080/api/v1`,
  });

  function postSignup() {
    apiUsers
      .post("/signup", {
        username,
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setSignUp(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }

  if (isSignUp) {
    return <Redirect to={referer} />;
  }

  return (
    <form className="ml-0">
      <div class="form-email-box col-12 mb-3">
        <label for="userName" class="email-label">
          Username
        </label>
        <input
          type="username"
          value={username}
          className="form-control"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="radeonvega56"
        />
      </div>
      <div class="form-email-box col-12 mb-3">
        <label for="yourEmailAddress" class="email-label">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="radeon@binar.co.id"
        />
      </div>
      <div class="form-email-box col-12 mb-3">
        <label for="yourPassword" class="email-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="*********"
        />
      </div>
      <div className="col-8 mb-3 mt-5 p-0">
        <button
          onClick={postSignup}
          className="signup-pagebut btn btn-dark w-100"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Signup;
