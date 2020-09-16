import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/gameboard`,
});

class Hero extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    api.get("/").then((res) => {
      console.log(res.data);
      this.setState({ images: res.data });
    });
  }

  render() {
    return (
      <header className="App-header">
        {this.state.images.map((images) => (
          <img key={images.id} src={images.imageUrl} alt={images.name} />
          // <h1 key={gameboard.id}>{gameboard.name}</h1>
        ))}
      </header>
    );
  }
}

export default Hero;
