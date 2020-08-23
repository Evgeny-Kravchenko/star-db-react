import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';

import Record from '../Record';

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getStarship });
const funcName = () => (
  <>
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
  </>
);

const StarshipDetails = compose(
  withSwapiService(mapMethodToProps),
  withData,
  withChildFunction(funcName),
)(ItemDetails);

export default StarshipDetails;
