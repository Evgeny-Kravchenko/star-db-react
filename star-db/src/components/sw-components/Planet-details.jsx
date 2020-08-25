import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';

import Record from '../Record';

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPlanet });
const funcName = () => (
  <>
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Population" field="population" />
    <Record label="Diameter" field="diameter" />
  </>
);

const PlanetDetails = compose(
  withSwapiService(mapMethodToProps),
  withData,
  withChildFunction(funcName),
)(ItemDetails);

export default PlanetDetails;
