import React from "react";
import { ANIMALS, AGE, SEX } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  id="location"
                  onChange={context.handleLocationChange}
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Type of Pawtner
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
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
                  disabled={!context.breeds.length}
                  id="breed"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                >
                  <option />
                  {context.breeds.map(breed => (
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
                  value={context.age}
                  onChange={context.handleAgeChange}
                  onBlur={context.handleAgeChange}
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
                  value={context.sex}
                  onChange={context.handleSexChange}
                  onBlur={context.handleSexChange}
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
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
