import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function Signup(props) {
  const apiUsers = axios.create({
    // baseURL: `https://bakergun-backend-service-users.herokuapp.com/api/v1`, // Cloud RestApi
    baseURL: `http://localhost:8080/api/v1`, // Local RestAPI
  });

  const initialState = {
    username: "",
    email: "",
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

  const handleFormSumbit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
    });
    apiUsers
      .post("/signup", data)
      .then((res) => {
        return res.data;
        //   console.log(res.data);
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
    <form onSubmit={handleFormSumbit} className="ml-0">
      <div class="form-email-box col-12 mb-3">
        <label for="userName" class="email-label">
          Username
        </label>
        <input
          type="username"
          value={data.username}
          onChange={handleInputChange}
          className="form-control"
          name="username"
          placeholder="radeonvega56"
        />
      </div>
      <div class="form-email-box col-12 mb-3">
        <label for="yourEmailAddress" class="email-label">
          Email Address
        </label>
        <input
          type="email"
          value={data.email}
          className="form-control"
          onChange={handleInputChange}
          name="email"
          placeholder="radeon@binar.co.id"
        />
      </div>
      <div class="form-email-box col-12 mb-3">
        <label for="yourPassword" class="email-label">
          Password
        </label>
        <input
          type="password"
          value={data.password}
          className="form-control"
          onChange={handleInputChange}
          name="password"
          placeholder="*********"
        />
      </div>
      {data.errorMessage && (
        <span className="san-form-error">{data.errorMessage}</span>
      )}
      <div className="col-8 mb-3 mt-5 p-0">
        <button
          disabled={data.isSubmitting}
          className="signup-pagebut btn btn-dark w-100"
        >
          {data.isSubmitting ? (
            <Spinner animation="border" variant="success" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}

export default Signup;
