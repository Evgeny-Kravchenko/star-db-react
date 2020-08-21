import React from 'react';

import ItemDetails from '../Item-details';

import SwapiService from '../../services/swapi.service';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const swapiService = new SwapiService();

const { getStarship } = swapiService;

const StarshipDetails = withChildFunction(withData(ItemDetails, getStarship), () => (
  <>
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
  </>
));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getStarship });

export default withSwapiService(StarshipDetails, mapMethodToProps);
