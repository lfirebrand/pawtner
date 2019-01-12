import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import PetProfile from "./PetProfile";
import SearchParameters from "./SearchParameters";

const petfinder = pf({
  key: process.env.API_KEY
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "Omaha, NE",
      animal: "",
      breed: "",
      breeds: [],
      age: "",
      sex: "",
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      handleAgeChange: this.handleAgeChange,
      handleSexChange: this.handleSexChange,
      getBreeds: this.getBreeds
    };
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  };
  handleSexChange = event => {
    this.setState({
      sex: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed
        .list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder &&
            data.petfinder.breeds &&
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({
              breeds: data.petfinder.breeds.breed
            });
          } else {
            this.setState({ breeds: [] });
          }
        })
        .catch(console.error);
    } else {
      this.setState({
        breeds: []
      });
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">Pawtner!</Link>
          <h2>Find your next pawtner in crime</h2>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <Provider value={this.state}>
          <Router>
            <Results path="/" />
            <PetProfile path="/petprofile/:id" />
            <SearchParameters path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
