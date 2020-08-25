import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService, compose } from '../hoc-helpers';

import Record from '../Record';

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPerson });
const funcName = () => (
  <>
    <Record label="Gender" field="gender" />
    <Record label="Eye color" field="eyeColor" />
    <Record label="Birth year" field="birthYear" />
  </>
);

const PersonDetails = compose(
  withSwapiService(mapMethodToProps),
  withData,
  withChildFunction(funcName),
)(ItemDetails);

export default PersonDetails;
