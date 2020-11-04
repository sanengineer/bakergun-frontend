import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth";

export const Login = (props) => {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });
    fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: "LOGIN",
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="ml-0 mt-5">
      <div className="form-email-box col-12 mb-3">
        <label for="username" className="email-label">
          Username
        </label>
        <input
          type="username"
          value={data.username}
          onChange={handleInputChange}
          className="form-control"
          placeholder="radeonvega56"
          name="username"
          id="username"
        ></input>
      </div>
      <div className="form-email-box col-12 mb-3">
        <label for="password" className="email-label">
          Password
        </label>
        <input
          type="password"
          value={data.password}
          onChange={handleInputChange}
          name="password"
          id="password"
          className="form-control"
          placeholder="*********"
        ></input>
      </div>

      {data.errorMessage && (
        <span className="form-error">{data.errorMessage}</span>
      )}

      <div className="col-8 mb-3 mt-5 p-0">
        <button
          disabled={data.isSubmitting}
          className="login-pagebut btn btn-dark w-100"
        >
          {data.isSubmitting ? <Redirect to="/" /> : "Login"}
        </button>
      </div>
    </form>
  );
};

export default Login;
