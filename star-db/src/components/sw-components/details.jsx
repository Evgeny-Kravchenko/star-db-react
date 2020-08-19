import React from 'react';

import ItemDetails from '../Item-details';

import SwapiService from '../../services/swapi.service';
import Record from '../Record';

const swapiService = new SwapiService();

const { getPlanet, getPerson, getStarship } = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson}>
      <Record label="Gender" field="gender" />
      <Record label="Eye color" field="eyeColor" />
      <Record label="Birth year" field="birthYear" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPlanet}>
      <Record label="Rotation period" field="rotationPeriod" />
      <Record label="Population" field="population" />
      <Record label="Diameter" field="diameter" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getStarship}>
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </ItemDetails>
  );
};

export { PlanetDetails, PersonDetails, StarshipDetails };
