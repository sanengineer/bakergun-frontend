import React, { Component } from "react";
import axios from "axios";
import Slide from "react-reveal/Slide";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1/players`,
});

class Quotes extends Component {
  state = {
    imgPlayerOne: "",
    imgPlayerTwo: "",
    imgPlayerThree: "",
    altPlayerOne: "",
    altPlayerTwo: "",
    altPlayerThree: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({
        imgPlayerOne: res.data[0].avatar,
        imgPlayerTwo: res.data[1].avatar,
        imgPlayerThree: res.data[2].avatar,
        altPlayerOne: res.data[0].name,
        altPlayerTwo: res.data[1].name,
        altPlayerThree: res.data[2].name,
      });
    });
  }

  render() {
    return (
      <section className="quotes-section">
        <div className="quotes-bg">
          <div className="quotes-content container">
            <div className="row">
              <Slide bottom>
                <div className="quotes-text-box">
                  <h2 className="quotes-h2">Top Scores</h2>
                  <p className="quotes-desc">
                    This top score from various games provided on this platform
                  </p>
                  <a
                    href="/players.html"
                    className="quotes-button btn btn-dark"
                  >
                    See More
                  </a>
                </div>
              </Slide>
              <div className="quotes-people-box">
                <Slide right>
                  <div className="quotes-people-box-list float-right">
                    <div className="first-text d-flex justify-content-between">
                      <div className="img-bio d-flex justify-content-between">
                        <div className="image-profile-box">
                          <div className="image-profile">
                            <img
                              className="img-src rounded-circle"
                              src={this.state.imgPlayerOne}
                              alt={this.state.altPlayerOne}
                              width="30"
                            />
                          </div>
                        </div>
                        <div className="bio-desc pl-4">
                          <div className="bio-name">Mann Stell</div>
                          <div className="bio-pro">PC Gamer</div>
                        </div>
                      </div>
                      <div className="logo-twt">
                        <svg
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="second-text">
                      <span>“One of my gaming highlights of the year.”</span>
                    </div>
                    <div className="third-text">
                      <span>October 18, 2020</span>
                    </div>
                  </div>
                </Slide>
                <Slide left>
                  <div className="quotes-people-box-list float-left">
                    <div className="first-text d-flex justify-content-between">
                      <div className="img-bio d-flex justify-content-between">
                        <div className="image-profile-box">
                          <div className="image-profile">
                            <img
                              className="img-src rounded-circle"
                              src={this.state.imgPlayerTwo}
                              alt={this.state.altPlayerTwo}
                              width="30"
                            />
                          </div>
                        </div>
                        <div className="bio-desc pl-4">
                          <div className="bio-name">Wondr Womann</div>
                          <div className="bio-pro">Cooker</div>
                        </div>
                      </div>
                      <div className="logo-twt">
                        <svg
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="second-text">
                      <span>
                        “The next big thing in the world of streaming and
                        survival games.”
                      </span>
                    </div>
                    <div className="third-text">
                      <span>December 21, 2020</span>
                    </div>
                  </div>
                </Slide>
                <Slide right>
                  <div className="quotes-people-box-list float-right">
                    <div className="first-text d-flex justify-content-between">
                      <div className="img-bio d-flex justify-content-between">
                        <div className="image-profile-box">
                          <div className="image-profile">
                            <img
                              className="img-src rounded-circle"
                              src={this.state.imgPlayerThree}
                              alt={this.state.altPlayerThree}
                              width="30"
                            />
                          </div>
                        </div>
                        <div className="bio-desc pl-4">
                          <div className="bio-name">Lowe Batt</div>
                          <div className="bio-pro">Charger</div>
                        </div>
                      </div>
                      <div className="logo-twt">
                        <svg
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="second-text">
                      <span>
                        “Batt Mann Playing The Wildly Entertaining ‘SOS’ Is
                        Ridiculous.”
                      </span>
                    </div>
                    <div className="third-text">
                      <span>Januari 11, 2021</span>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quotes;
