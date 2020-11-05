import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export const Login = (props) => {
  const { dispatch } = useContext(AuthContext);
  const apiUsers = axios.create({
    baseURL: `https://bakergun-backend-service-users.herokuapp.com/api/v1`, // Cloud RestApi
    // baseURL: `http://localhost:8080/api/v1`, // Local RestAPI
  });

  const initialState = {
    username: "",
    password: "",
    isSubmitting: false,
    errorMessage: "",
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
    apiUsers
      .post("/login", data)
      .then((res) => {
        return res.data;
        //   console.log(res.data);
      })
      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: res,
        });
      })
      .catch((err) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: err.response.data.message,
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
          {data.isSubmitting ? (
            <Spinner animation="border" variant="warning" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default Login;
