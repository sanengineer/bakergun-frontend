import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Pulse from "react-reveal/Pulse";

const api = axios.create({
  baseURL: `https://bakergun-backend.vercel.app/api/v1/images`,
});

class Features extends Component {
  state = {
    imageBg: "",
    altImg: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({
        imageBg: res.data[30].imageUrl,
        altImg: res.data[30].name,
      });
    });
  }

  render() {
    return (
      <section className="features-section">
        <div className="features-bg">
          <div className="features-content container">
            <div className="row">
              <div className="feat-img">
                <Pulse>
                  <img src={this.state.imageBg} alt={this.state.altImg} />
                </Pulse>
              </div>
              <div className="features-content-text">
                <div className="features-title-1">What's so special?</div>
                <div className="features-title-2">Features</div>
                <div className="feature-ul pt-5">
                  <Accordion>
                    <div class="feature-container pb-5">
                      <div class="feature-list-box">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          <h2 class="mb-0">Traditional Games</h2>
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="0">
                        <div class="feature-list-desc pt-5 pl-5">
                          If you miss your childhood, we provide many tradition
                          games here
                        </div>
                      </Accordion.Collapse>
                    </div>
                    <div class="feature-container pb-5">
                      <div class="feature-list-box">
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="1"
                        >
                          <h2 class="mb-0">Game Suit</h2>
                        </Accordion.Toggle>
                      </div>
                      <Accordion.Collapse eventKey="1">
                        <div class="feature-list-desc pt-5 pl-5">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
