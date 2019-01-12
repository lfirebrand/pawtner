import React from "react";

const SearchContext = React.createContext({
  location: "Omaha, NE",
  animal: "",
  breed: "",
  breeds: [],
  age: "",
  sex: "",
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {},
  handleAgeChange() {},
  handleSexChange() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
