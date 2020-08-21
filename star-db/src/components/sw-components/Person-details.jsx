import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const PersonDetails = withChildFunction(withData(ItemDetails), () => (
  <>
    <Record label="Gender" field="gender" />
    <Record label="Eye color" field="eyeColor" />
    <Record label="Birth year" field="birthYear" />
  </>
));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPerson });

export default withSwapiService(PersonDetails, mapMethodToProps);
