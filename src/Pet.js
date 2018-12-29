import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, sex, age, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    let hero = "http://placekitten.com/300/300";
    if (photos[0] && photos[0].value) {
      hero = photos[0].value;
    }

    return (
      <Link to={`/petprofile/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} | ${breed} | ${sex} | ${age} | ${location}`}</h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
