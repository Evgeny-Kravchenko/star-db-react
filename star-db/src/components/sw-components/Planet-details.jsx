import React from 'react';

import ItemDetails from '../Item-details';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const PlanetDetails = withChildFunction(() => (
  <>
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Population" field="population" />
    <Record label="Diameter" field="diameter" />
  </>
))(withData(ItemDetails));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPlanet });

export default withSwapiService(mapMethodToProps)(PlanetDetails);
