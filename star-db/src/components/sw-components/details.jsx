import React from 'react';

import ItemDetails from '../Item-details';

import SwapiService from '../../services/swapi.service';
import { withData, withChildFunction } from '../hoc-helpers';
import Record from '../Record';

const swapiService = new SwapiService();

const { getPlanet, getPerson, getStarship } = swapiService;

const PersonDetails = withChildFunction(withData(ItemDetails, getPerson), () => (
  <>
    <Record label="Gender" field="gender" />
    <Record label="Eye color" field="eyeColor" />
    <Record label="Birth year" field="birthYear" />
  </>
));

const PlanetDetails = withChildFunction(withData(ItemDetails, getPlanet), () => (
  <>
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Population" field="population" />
    <Record label="Diameter" field="diameter" />
  </>
));

const StarshipDetails = withChildFunction(withData(ItemDetails, getStarship), () => (
  <>
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
  </>
));

export { PlanetDetails, PersonDetails, StarshipDetails };
