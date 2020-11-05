import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import Axios from "axios";

function Signup(props) {
  // Without Axios
  //
  const initialState = {
    username: "",
    email: "",
    password: "",
    isSubmitting: false,
    // errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  // const handleFormSumbit = (event) => {
  //   event.preventDefault();
  //   setData({
  //     ...data,
  //     isSubmitting: true,
  //     // errorMessage: null,
  //   });
  //   fetch(
  //     "https://bakergun-backend-service-users.herokuapp.com/api/v1/signup",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: data.username,
  //         email: data.email,
  //         password: data.password,
  //       }),
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res);
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw res;
  //     })
  //     .catch((err) => {
  //       setData({
  //         ...data,
  //         isSubmitting: false,
  //         errorMessage: err.message,
  //       });
  //     });
  // };

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
      <div className="col-8 mb-3 mt-5 p-0">
        <button
          disabled={data.isSubmitting}
          className="signup-pagebut btn btn-dark w-100"
        >
          {data.isSubmitting ? <Redirect to="/login" /> : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default Signup;
