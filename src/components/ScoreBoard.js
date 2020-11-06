import React, { Component } from "react";
import axios from "axios";
import Flash from "react-reveal/Flash";
import Pulse from "react-reveal/Pulse";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1`,
});

class ScoreBoard extends Component {
  componentDidMount() {
    api.get("/gameboard").then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return (
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
                    <p id="wldText" className="content-wld">
                      ....
                    </p>
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
                    <p className="game-page-card text h2" id="humanScore">
                      00
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
                      00
                    </p>
                  </div>
                </div>
              </Pulse>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
