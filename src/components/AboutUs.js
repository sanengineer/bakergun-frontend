import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

// const api = axios.create({
//   baseURL: `${process.env.REACT_APP_HOST}/api/v1/images`,
// });

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
});

class AboutUs extends Component {
  //   constructor(props) {
  //     super(props);
  //     state = {
  //       imgSlideOne: "",
  //       imgSlideTwo: "",
  //       imgSlideThree: "",
  //     };
  //   }

  state = {
    imgSlideOne: "",
    imgSlideTwo: "",
    imgSlideThree: "",
    altSlideOne: "",
    altSlideTwo: "",
    altSlideThree: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      if (res.data.length > 0) {
        console.log(res.data);

        this.setState({
          imgSlideOne: res.data[27].imageUrl,
          imgSlideTwo: res.data[28].imageUrl,
          imgSlideThree: res.data[29].imageUrl,
          altSlideOne: res.data[27].name,
          altSlideTwo: res.data[28].name,
          altSlideThree: res.data[29].name,
        });
      }
    });
  }

  render() {
    return (
      <section class="about-us-section" id="aboutUsSection">
        <div id="aboutUsBg" class="about-us-bg">
          <div class="about-us-content container">
            <div class="about-us-text">
              <div class="about-us-title-1">What's so special?</div>
              <div class="about-us-title-2 pt-4">The Games</div>
            </div>
            <div class="about-us-carrousel">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={this.state.imgSlideOne}
                    alt={this.state.altSlideOne}
                  />
                  <Carousel.Caption>
                    <h5>Rock Hand</h5>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={this.state.imgSlideTwo}
                    alt={this.state.altSlideTwo}
                  />
                  <Carousel.Caption>
                    <h5>Paper Hand</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={this.state.imgSlideThree}
                    alt={this.state.altSlideThree}
                  />
                  <Carousel.Caption>
                    <h5>Scissors Hand</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
