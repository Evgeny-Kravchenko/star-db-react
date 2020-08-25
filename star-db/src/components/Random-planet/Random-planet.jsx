import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Random-planet.scss';

import SwapiService from '../../services/swapi.service';
import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator/Error-indicator';

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
      error: false,
    };
  }

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({ ...planet, loading: false });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {
    const { name, population, rotationPeriod, diameter, imageUrl, loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const planetView =
      !loading && !error ? (
        <PlanetView
          name={name}
          population={population}
          rotationPeriod={rotationPeriod}
          diameter={diameter}
          imageUrl={imageUrl}
        />
      ) : null;
    const errorView = error ? <ErrorIndicator /> : null;

    return (
      <div className="card border-primary mb-3 planet-details">
        {spinner}
        {planetView}
        {errorView}
      </div>
    );
  }
}

RandomPlanet.defaultProps = {
  updateInterval: 10000,
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};
