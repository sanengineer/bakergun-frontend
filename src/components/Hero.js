import React, { Component } from "react";
import axios from "axios";
import iconArrowDown from "../assets/icons/arrow-down.png";

// const api = axios.create({
//   baseURL: `${process.env.REACT_APP_HOST}/api/v1/images`,
// });

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
});

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    api.get("/").then((res) => {
      if (res.data.length > 0) {
        console.log(res.data);
        // this.setState({ images: res.data.map((image) => image.imageUrl) });
        this.setState({
          imgBg: res.data[26].imageUrl,
        });
      }
    });
  }

  render() {
    return (
      // <header className="App-header">
      // {this.state.images.map((images) => {
      //  return (
      //    <img key={images.id} src={images.imageUrl} alt={images.name} />
      //  );
      //  })}
      // {/* </header> */}

      <section className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${this.state.imgBg})` }}
        >
          <div className="hero-content container text-center">
            <h1 className="header-hero-page">Play Traditional Game</h1>
            <p className="desc-hero-page pb-3 pt-3">
              Experience new traditional game play
            </p>
            <a
              href="/game.html"
              type="button"
              className="playnow-button btn btn-dark mt-3 mb-3"
            >
              Play Now
            </a>
          </div>
          <div className="hero-arrow-down">
            <span className="arrow-down-text">The Story</span>
            <div className="arrow-down-ic">
              <img src={iconArrowDown} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
