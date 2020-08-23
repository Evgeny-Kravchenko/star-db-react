import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const StarshipDetails = withChildFunction(() => (
  <>
    <Record label="Model" field="model" />
    <Record label="Length" field="length" />
    <Record label="Cost" field="costInCredits" />
  </>
))(withData(ItemDetails));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getStarship });

export default withSwapiService(mapMethodToProps)(StarshipDetails);
