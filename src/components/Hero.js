import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: `https://bakergun-backend.herokuapp.com/api/v1/images`,
});

class Hero extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [],
    }
  }
  

  componentDidMount() {
    api.get("/").then((res) => {
      if (res.data.length>0) {
        console.log(res.data);
        // this.setState({ images: res.data.map((image) => image.imageUrl) });
        this.setState({ images: res.data });
      }
    });
  }

  render() {
    return (
      <header className="App-header">
        {this.state.images.map((images) => {
          return (
          <img key={images.id} src={images.imageUrl}/>
        )
         })}
      </header>
    );
  }
}

export default Hero;
