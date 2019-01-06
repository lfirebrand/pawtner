import React from "react";
import pf, { ANIMALS, AGE, SEX } from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY
});

class SearchParameters extends React.Component {
  state = {
    location: "Omaha, NE",
    animal: "",
    breed: "",
    breeds: [],
    age: "",
    ages: [],
    sex: ""
  };
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: "",
        age: ""
      },
      this.getBreeds
    );
  };
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
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
  // setAge() {
  //   if (this.state.animal) {
  //     petfinder.pet.find.age({ animal: this.state.animal }).then(data => {
  //       if (
  //         data.petfinder &&
  //         data.petfinder.pet.find.age &&
  //         Array.isArray(data.petfinder.pet.find.age)
  //       ) {
  //         this.setState({
  //           breeds: data.petfinder.pet.find.age
  //         });
  //       } else {
  //         this.setState({ ages: [] });
  //       }
  //     });
  //   } else {
  //     this.setState({ ages: [] });
  //   }
  // }
  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
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
      });
    } else {
      this.setState({ breeds: [] });
    }
  }
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Type of Pawtner
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={!this.state.breeds.length}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="age">
          Age
          <select
            id="age"
            value={this.state.age}
            onChange={this.handleAgeChange}
            onBlur={this.handleAgeChange}
          >
            <option />
            {AGE.map(age => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="sex">
          Sex
          <select
            id="sex"
            value={this.state.sex}
            onChange={this.handleSexChange}
            onBlur={this.handleSexChange}
          >
            <option />
            {SEX.map(sex => (
              <option key={sex} value={sex}>
                {sex}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}
export default SearchParameters;
