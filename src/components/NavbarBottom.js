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
  constructor(props) {
    super(props);

    this.state = {
      buttonRock: "Rock",
      buttonPaper: "Paper",
      buttonScissors: "Scissors",
    };

    this.humanScoreResult = 0;
    this.botScoreResult = 0;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api.get("/gameboard").then((res) => {
      this.setState({
        iconRock: res.data.rockHandUrl,
        iconPaper: res.data.paperHandUrl,
        iconScissors: res.data.scissorsHandUrl,
      });
    });
  }

  whoIsWin(human, bot) {
    if (human === bot) {
      return "Draw";
    }

    if (human === "Rock") {
      if (bot === "Scissors") {
        return "You";
      } else {
        return "Bot";
      }
    }

    if (human === "Paper") {
      if (bot === "Rock") {
        return "You";
      } else {
        return "Bot";
      }
    }

    if (human === "Scissors") {
      if (bot === "Paper") {
        return "You";
      } else {
        return "Bot";
      }
    }
  }

  handleClick(e) {
    this.setState({
      value: e.target.name,
    });

    let getBotSelect = ["Rock", "Paper", "Scissors"];
    let manSelect = e.currentTarget.getAttribute("value");
    let botRandomSelect = Math.floor(Math.random() * getBotSelect.length);
    let result = this.whoIsWin(manSelect, getBotSelect[botRandomSelect]);

    if (result === "You") {
      this.humanScoreResult++;
      result += " Win";
    }

    if (result === "Bot") {
      this.botScoreResult++;
      result += " Win";
    }

    if (result === "Draw") {
      result = "Draw";
    }

    console.log("You choose: " + manSelect);
    console.log("Bot choose: " + botRandomSelect);
    console.log("Man Score: " + this.humanScoreResult);
    console.log("Bot Score: " + this.botScoreResult);
    console.log(`Result: ${result}`);
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
                  onClick={this.handleClick}
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  name="Rock"
                  value="Rock"
                >
                  <img
                    id="buttonHumanHandRock"
                    src={this.state.iconRock}
                    alt="Rock Icon"
                    width="30"
                    name="Rock"
                    value="Rock"
                  />
                </button>
                <span className="san-text-white">Rock</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  onClick={this.handleClick}
                  name="Rock"
                  value="Paper"
                >
                  <img
                    src={this.state.iconPaper}
                    id="buttonHumanHandPaper"
                    alt="Paper Icon"
                    width="30"
                    name="Paper"
                    value="Paper"
                  />
                </button>
                <span className="san-text-white">Paper</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  onClick={this.handleClick}
                  name="Scissors"
                  value="Scissors"
                >
                  <img
                    src={this.state.iconScissors}
                    id="buttonHumanHandScissors"
                    alt="Scissors Hand"
                    width="30"
                    name="Scissors"
                    value="Scissors"
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
