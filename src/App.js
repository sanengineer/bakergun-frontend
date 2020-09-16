import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import GamePage from "./pages/GamePage";

import "./assets/scss/style.scss";

// import axios from "axios";

// const api = axios.create({
//   baseURL: `https://bakergun-backend.vercel.app/api/v1/gameboard`,
// });

// class App extends Component {
//   state = {
//     gameboards: [],
//   };

//   componentDidMount() {
//     api.get("/").then((res) => {
//       console.log(res.data);
//       this.setState({ gameboards: res.data });
//     });
//   }

//   render() {
//     return (
//       <header className="App-header">
//         {this.state.gameboards.map((gameboard) => (
//           // <img key={gameboard.id} src={gameboard.name} alt="" />
//           <h1 key={gameboard.id}>{gameboard.name}</h1>
//         ))}
//       </header>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/game" exact component={GamePage} />
      </Router>
    </div>
  );
}

export default App;
