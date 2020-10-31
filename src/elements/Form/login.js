import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { useAuth } from "../../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = "/";

  const apiUsers = Axios.create({
    baseURL: `http://localhost:8080/api/v1`,
  });

  function postLogin() {
    apiUsers
      .post("/login", {
        username,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <form className="ml-0">
      <div className="form-email-box col-12 mb-3">
        <label for="userName" className="email-label">
          Username
        </label>
        <input
          type="username"
          className="form-control"
          placeholder="radeonvega56"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
      </div>
      <div className="form-email-box col-12 mb-3">
        <label for="yourPassword" className="email-label">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="form-control"
          placeholder="*********"
        ></input>
      </div>
      <div className="col-8 mb-3 mt-5 p-0">
        <button
          onClick={postLogin}
          className="login-pagebut btn btn-dark w-100"
        >
          Submit
        </button>
      </div>
      {isError && <p>The username or password provided were incorrect!</p>}
    </form>
  );
}

export default Login;
