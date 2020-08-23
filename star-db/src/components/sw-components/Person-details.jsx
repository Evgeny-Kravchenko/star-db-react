import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const PersonDetails = withChildFunction(() => (
  <>
    <Record label="Gender" field="gender" />
    <Record label="Eye color" field="eyeColor" />
    <Record label="Birth year" field="birthYear" />
  </>
))(withData(ItemDetails));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPerson });

export default withSwapiService(mapMethodToProps)(PersonDetails);
