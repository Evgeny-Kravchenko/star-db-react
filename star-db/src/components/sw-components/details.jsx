import React from 'react';

import ItemDetails from '../Item-details';

import SwapiService from '../../services/swapi.service';
import withData from '../hoc-helpers';

const swapiService = new SwapiService();

const { getPlanet, getPerson, getStarship } = swapiService;

const PersonDetails = withData(ItemDetails, getPerson);

const PlanetDetails = withData(ItemDetails, getPlanet);

const StarshipDetails = withData(ItemDetails, getStarship);

export { PlanetDetails, PersonDetails, StarshipDetails };
