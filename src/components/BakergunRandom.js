import React, { Component } from "react";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1`, // Cloud RestApi
  // baseURL: `http://localhost:8080/api/v1`, // Local RestAPI
});

class BakergunRandom extends Component {
  state = {
    botFaceStart: "",
    botHandStart: "",
    botHandRock: "",
    botHandPaper: "",
    botHandScissors: "",
    humanHandStart: "",
    humanHandRock: "",
    humanHandPaper: "",
    humanHandScissors: "",
  };

  componentDidMount() {
    api.get("/gameboard").then((res) => {
      this.setState({
        botFaceStart: res.data.botFaceStartUrl,
        botHandStart: res.data.botHandStartUrl,
        botHandRock: res.data.rockHandUrl,
        botHandPaper: res.data.paperHandUrl,
        botHandScissors: res.data.scissorsHandUrl,
        humanHandStart: res.data.humanHandStartUrl,
        humanHandRock: res.data.rockHandUrl,
        humanHandPaper: res.data.paperHandUrl,
        humanhandScissors: res.data.scissorsHandUrl,
      });

      // check respose data from backend
      console.log(res.data);
    });
  }
  render() {
    return (
      <div className="game-play container text-center text-white">
        <div className="row justify-content-center">
          <div className="col">
            <div className="player-choice float-right" id="humanCoice">
              <a
                href="#"
                className="human-hand-start btn "
                value="HumanHandStart"
              >
                <img
                  id="humanHandStart"
                  src={this.state.humanHandStart}
                  alt="Human Hand Start"
                  width="120"
                  height="120"
                />
              </a>
              <a href="#" className="human-hand-choice btn " id="humanHandRock">
                <img
                  src={this.state.humanHandRock}
                  alt="Human Rock"
                  width="120"
                  height="120"
                />
              </a>
              <a
                href="#"
                className="human-hand-choice btn "
                id="humanHandPaper"
                value="Paper"
              >
                <img
                  src={this.state.humanHandPaper}
                  alt="Human Paper"
                  width="120"
                  height="120"
                />
              </a>
              <a
                href="#"
                className="human-hand-choice btn "
                id="humanHandScissors"
                value="Scissors"
              >
                <img
                  src={this.state.humanHandScissors}
                  alt="Human Scissors"
                  width="120"
                  height="120"
                />
              </a>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="bot-choice" id="botChoice">
                  <a
                    href="#"
                    className="bot-hand-start btn "
                    value="BotHandStart"
                  >
                    <img
                      id="botHandStart"
                      src={this.state.botHandStart}
                      alt="Bot Hand Start"
                      width="120"
                      height="120"
                    />
                  </a>
                  <a
                    href="#"
                    className="bot-hand-choice btn "
                    id="botHandRock"
                    value="Rock"
                  >
                    <img
                      src={this.state.botHandRock}
                      alt="Bot Rock"
                      width="120"
                      height="120"
                    />
                  </a>
                  <a
                    href="#"
                    className="bot-hand-choice btn "
                    id="botHandPaper"
                    value="Paper"
                  >
                    <img
                      src={this.state.botHandPaper}
                      alt="Bot Paper"
                      width="120"
                      height="120"
                    />
                  </a>
                  <a
                    href="#"
                    className="bot-hand-choice btn "
                    id="botHandScissors"
                    value="Scissors"
                  >
                    <img
                      src={this.state.botHandScissors}
                      alt="Bot Scissors"
                      width="120"
                      height="120"
                    />
                  </a>
                </div>
                <div className="bot-face">
                  <img
                    id="botFace"
                    src={this.state.botFaceStart}
                    alt="Bot Face Start"
                    width="144"
                    height="144"
                    value="Start Game"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BakergunRandom;
