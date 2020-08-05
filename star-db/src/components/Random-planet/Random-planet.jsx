import React, { Component } from 'react';
import './Random-planet.scss';

import SwapiService from '../../services/swapi.service';
import Spinner from '../Spinner';

const PlanetView = (planet) => {
  const { name, population, rotationPeriod, diameter, imageUrl } = planet;
  return (
    <div className="card-body planet-details__body">
      <img className="planet-details__image" src={imageUrl} alt={name} />
      <div className="planet-details__description">
        <h4 className="card-title">{name}</h4>
        <ul className="planet-details__items">
          <li className="list-group-item">Population: {population} units</li>
          <li className="list-group-item">Rotation period: {rotationPeriod} days</li>
          <li className="list-group-item">Diameter: {diameter} km</li>
        </ul>
      </div>
    </div>
  );
};

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
      imageUrl: null,
      loading: true,
    };
  }

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({ ...planet, loading: false });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  render() {
    const { name, population, rotationPeriod, diameter, imageUrl, loading } = this.state;

    return (
      <div className="card border-primary mb-3 planet-details">
        {loading ? (
          <Spinner />
        ) : (
          <PlanetView
            name={name}
            population={population}
            rotationPeriod={rotationPeriod}
            diameter={diameter}
            imageUrl={imageUrl}
          />
        )}
      </div>
    );
  }
}
