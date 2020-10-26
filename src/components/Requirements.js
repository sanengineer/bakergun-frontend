import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
});

class Requirements extends Component {
  state = {
    imageBg: "",
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);

      this.setState({
        imageBg: res.data[32].imageUrl,
      });
    });
  }

  render() {
    return (
      <section className="requirements-section">
        <div
          className="requirements-bg"
          style={{ backgroundImage: `url(${this.state.imageBg})` }}
        >
          <div className="features-content container">
            <h1 className="requirements-h1 col-4">System Requirement</h1>
            <h3 className="requirements-h3">Can My Computer Run this game ?</h3>
            <div className="requirements-box">
              <div className="row m-0">
                <div className="requir-box-os py-3 col">
                  <h4>Os:</h4>
                  <p>Windows 7 64-bit only (No OSX support at this time)</p>
                </div>
                <div className="requir-box-procie py-3 col">
                  <h4>Processor:</h4>
                  <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                </div>
              </div>
              <div className="row m-0">
                <div className="requir-box-memo py-3 col">
                  <h4>Memory:</h4>
                  <p>4 GB RAM</p>
                </div>
                <div className="requir-box-stor py-3 col">
                  <h4>Storage:</h4>
                  <p>8 GB available space</p>
                </div>
              </div>
              <div className="row m-0">
                <div className="requir-box-graph py-3 col">
                  <h4>Graphics:</h4>
                  <p>
                    NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB
                    DirectX11 (Shader Model 5)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Requirements;
