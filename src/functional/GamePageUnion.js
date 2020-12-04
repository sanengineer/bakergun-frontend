import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import Pulse from "react-reveal/Pulse";
import HeadShake from "react-reveal/HeadShake";
import Bounce from "react-reveal/Bounce";

import homeIco from "../assets/icons/home-icon-btn.png";
import newRoundIco from "../assets/icons/new-round-btn.png";

export default function GamePageUnion(props) {
  const api = axios.create({
    baseURL: `https://bakergun-backend.vercel.app/api/v1`, // Cloud RestApi
    // baseURL: `http://localhost:8080/api/v1`, // Local RestAPI
  });

  // let humanScoreResult = 0;
  // let botScoreResult = 0;

  const scoreResult = {
    botScoreResult: 0,
    humanScoreResult: 0,
  };

  let initialState = {
    iconRock: "",
    iconPaper: "",
    iconScissors: "",
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

  const [state, setstate] = useState(initialState);
  const [playScore, setPlayScore] = useState(scoreResult);

  console.log("this is initaialState: ", initialState);
  // console.log(humanScore, setHumanScore);
  console.log(
    "test arrray: ",
    scoreResult.humanScoreResult,
    scoreResult.botScoreResult
  );
  console.log(scoreResult);
  console.log("state out setState: ", state);
  console.log("this is play score", playScore, setPlayScore);

  function StartGame(e) {
    let getBotSelect = ["Rock", "Paper", "Scissors"];
    let manSelect = e.currentTarget.getAttribute("value");
    let botRandomSelect = Math.floor(Math.random() * getBotSelect.length);
    let result = whoIsWin(manSelect, getBotSelect[botRandomSelect]);

    if (result === "You") {
      const test1 = scoreResult.humanScoreResult++;
      result += " Win";

      return <p>{test1}</p>;
    }

    if (result === "Bot") {
      scoreResult.botScoreResult++;
      result += " Win";
    }

    if (result === "Draw") {
      result = "Draw";
    }

    console.log("You choose: " + manSelect);
    console.log("Bot choose: " + botRandomSelect);
    console.log("Man Score: " + scoreResult.humanScoreResult);
    console.log("Bot Score: " + scoreResult.botScoreResult);
    console.log("Result:", result);

    const test = scoreResult.humanScoreResult;

    console.log(test);
  }

  function whoIsWin(human, bot) {
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

  if (state.iconPaper === "") {
    api.get("/gameboard").then((res) => {
      setstate({
        ...state,
        iconRock: res.data.rockHandUrl,
        iconPaper: res.data.paperHandUrl,
        iconScissors: res.data.scissorsHandUrl,
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
      console.log("state: ", res.data);
    });
  }

  return (
    <div className="game-page-component">
      <div className="score-board">
        <div className="container pt-4">
          <div className="row justify-content-center">
            <Flash>
              <h1 className="h4 text-white">Score Board</h1>
            </Flash>
          </div>
          <div className="row justify-content-center mb-2">
            <div className="col-lg-4 col-sm-2 col-md-4 win-lose-draw-status">
              <Pulse>
                <div id="wslCardBody" className="card bg-dark text-center">
                  <div
                    className="win-lose-draw-status game-page-card-header-score-board text-white font-weight-bold"
                    id="winLoseDrawStatus"
                  >
                    <p id="wldText" className="content-wld"></p>
                  </div>
                </div>
              </Pulse>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-2 human-score">
              <Pulse>
                <div className="game-page-card text-center">
                  <div className="game-page-card-header bg-danger text-white font-weight-bold h4">
                    YOU
                  </div>
                  <div className="game-page-card-body">
                    <p className="game-page-card text h2" id="manScore">
                      {}
                    </p>
                  </div>
                </div>
              </Pulse>
            </div>
            <div className="col-2 bot-score">
              <Pulse>
                <div className="game-page-card text-center">
                  <div className="game-page-card-header bg-danger text-white font-weight-bold h4">
                    COM
                  </div>
                  <div className="game-page-card-body">
                    <p className="game-page-card text h2" id="botScore">
                      {scoreResult.botScoreResult}
                    </p>
                  </div>
                </div>
              </Pulse>
            </div>
          </div>
        </div>
      </div>

      <div className="game-play container text-center text-white">
        <div className="row justify-content-center">
          <div className="col">
            <div className="player-choice float-right" id="humanCoice">
              <div className="human-hand-start btn" value="HumanHandStart">
                <Bounce left>
                  <img
                    id="humanHandStart"
                    src={state.humanHandStart}
                    alt="Human Hand Start"
                    width="120"
                    height="120"
                  />
                </Bounce>
              </div>
              <div className="human-hand-choice btn" id="humanHandRock">
                <img
                  src={state.humanHandRock}
                  alt="Human Rock"
                  width="120"
                  height="120"
                />
              </div>
              <div
                className="human-hand-choice btn"
                id="humanHandPaper"
                value="Paper"
              >
                <img
                  src={state.humanHandPaper}
                  alt="Human Paper"
                  width="120"
                  height="120"
                />
              </div>
              <div
                className="human-hand-choice btn"
                id="humanHandScissors"
                value="Scissors"
              >
                <img
                  src={state.humanHandScissors}
                  alt="Human Scissors"
                  width="120"
                  height="120"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="bot-choice" id="botChoice">
                  <div className="bot-hand-start btn" value="BotHandStart">
                    <Bounce right>
                      <img
                        id="botHandStart"
                        src={state.botHandStart}
                        alt="Bot Hand Start"
                        width="120"
                        height="120"
                      />
                    </Bounce>
                  </div>
                  <div
                    className="bot-hand-choice btn"
                    id="botHandRock"
                    value="Rock"
                  >
                    <img
                      src={state.botHandRock}
                      alt="Bot Rock"
                      width="120"
                      height="120"
                    />
                  </div>
                  <div
                    className="bot-hand-choice btn"
                    id="botHandPaper"
                    value="Paper"
                  >
                    <img
                      src={state.botHandPaper}
                      alt="Bot Paper"
                      width="120"
                      height="120"
                    />
                  </div>
                  <div
                    className="bot-hand-choice btn"
                    id="botHandScissors"
                    value="Scissors"
                  >
                    <img
                      src={state.botHandScissors}
                      alt="Bot Scissors"
                      width="120"
                      height="120"
                    />
                  </div>
                </div>

                <div className="bot-face">
                  <HeadShake>
                    <img
                      id="botFace"
                      src={state.botFaceStart}
                      alt="Bot Face Start"
                      width="144"
                      height="144"
                      value="Start Game"
                    />
                  </HeadShake>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <span className="san-text-white">{}</span>
              </div>
              <div className="col-2 text-center">
                <button
                  type="button"
                  onClick={StartGame}
                  className="human-button-choose btn-navbottom mt-2 mb-1 font-weight-bolder"
                  name="Rock"
                  value="Rock"
                >
                  <img
                    id="buttonHumanHandRock"
                    src={state.iconRock}
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
                  onClick={StartGame}
                  name="Rock"
                  value="Paper"
                >
                  <img
                    src={state.iconPaper}
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
                  onClick={StartGame}
                  name="Scissors"
                  value="Scissors"
                >
                  <img
                    src={state.iconScissors}
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
    </div>
  );
}
