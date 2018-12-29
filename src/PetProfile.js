import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";
import Carousel from "./Carousel";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class PetProfile extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(data.petfinder.pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          sex: pet.sex,
          age: pet.age,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>Pawtner is loading...</h1>;
    }
    const {
      animal,
      name,
      breed,
      location,
      sex,
      age,
      description,
      media
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div className="petprofile">
          <h1>{name}</h1>
          <h2>
            {animal} | {breed} | {age} | {sex} | {location}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default PetProfile;
