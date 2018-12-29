import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import PetProfile from "./PetProfile";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Pawtner!</Link>
          <p>Adopt your next pawtner in crime</p>
        </header>
        <Router>
          <Results path="/" />
          <PetProfile path="/petprofile/:id" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
