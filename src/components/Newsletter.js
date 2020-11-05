import React, { Component } from "react";
import axios from "axios";
import Pulse from "react-reveal/Pulse";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1/images`,
});

class Newsletter extends Component {
  state = {
    imageBg: "",
    altImg: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({
        imageBg: res.data[31].imageUrl,
        altImg: res.data[31].name,
      });
    });
  }

  render() {
    return (
      <section className="news-letter-section">
        <div className="news-letter-bg">
          <div className="news-letter-content container">
            <div className="row">
              <div className="feat-img">
                <Pulse>
                  <img
                    className="newslet-img-self"
                    src={this.state.imageBg}
                    alt={this.state.altImg}
                  />
                </Pulse>
              </div>
              <div className="newslet-text-box">
                <h2 className="newslet-h2">Want to stay in touch?</h2>
                <h3 className="newslet-h3">Newsletter Subscribe</h3>
                <p className="newslett-par">
                  In order to start receiving our news, all you have to do is
                  enter your email address. Everything else will be taken care
                  of by us. We will send you emails containing information about
                  game. We don’t spam.
                </p>
                <form className="row g-3">
                  <div className="form-email-box col-7">
                    <label for="exampleInputEmail1" className="email-label">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="youremail@binar.co.id"
                    ></input>
                  </div>
                  <div className="col-5 d-flex">
                    <button
                      type="submit"
                      className="newsletbut btn btn-dark w-100"
                    >
                      Subscibe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
