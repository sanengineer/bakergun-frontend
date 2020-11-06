import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import homeIco from "../assets/icons/home-icon-btn.png";
import newRoundIco from "../assets/icons/new-round-btn.png";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1`, // Cloud RestApi
  // baseURL: `http://localhost:8080/api/v1`, // Local RestAPI
});

export default class NavbarBottom extends Component {
  state = {
    iconRock: "",
    iconPaper: "",
    iconScissors: "",
  };

  componentDidMount() {
    api.get("/gameboard").then((res) => {
      this.setState({
        iconRock: res.data.rockHandUrl,
        iconPaper: res.data.paperHandUrl,
        iconScissors: res.data.scissorsHandUrl,
      });
      console.log(res.data.rockHandUrl);
    });
  }

  render() {
    return (
      <Fade bottom>
        <nav className="bottom-nav-moz bottom-nav fixed-bottom navbar navbar-expand-lg navbar-dark pt-3 pb-3">
          <div className="container">
            <div className="navbottom-row row justify-content-between">
              <div className="col-2 pl-0 text-center">
                <Link
                  className="backto-home-btn btn mt-2 mb-1 font-weight-bolder"
                  to="/"
                >
                  <img src={homeIco} alt="Home Icon" width="30" />
                </Link>
                <span className="san-text-white">Home</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  value="Rock"
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                >
                  <img
                    id="buttonHumanHandRock"
                    src={this.state.iconRock}
                    alt="Rock Icon"
                    width="30"
                    name="buttonHuman"
                  />
                </button>
                <span className="san-text-white">Rock</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  value="Paper"
                >
                  <img
                    src={this.state.iconPaper}
                    id="buttonHumanHandPaper"
                    alt="Paper Icon"
                    width="30"
                    name="buttonHuman"
                  />
                </button>
                <span className="san-text-white">Paper</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  value="Scissors"
                >
                  <img
                    src={this.state.iconScissors}
                    id="buttonHumanHandScissors"
                    name="buttonHuman"
                    alt="Scissors Hand"
                    width="30"
                  />
                </button>
                <span className="san-text-white h7">Scissors</span>
              </div>
              <div className="col-2 pr-0 text-center">
                <button
                  type="button"
                  className="new-round-button san-green mt-2 mb-1 font-weight-bolder"
                  id="newRoundButton"
                >
                  <img src={newRoundIco} alt="New Round Icon" width="30" />
                </button>
                <span className="san-text-white">Rematch</span>
              </div>
            </div>
          </div>
        </nav>
      </Fade>
    );
  }
}
