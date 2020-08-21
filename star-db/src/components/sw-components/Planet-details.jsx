import React from 'react';

import ItemDetails from '../Item-details';

import SwapiService from '../../services/swapi.service';

import { withData, withChildFunction, withSwapiService } from '../hoc-helpers';

import Record from '../Record';

const swapiService = new SwapiService();

const { getPlanet } = swapiService;

const PlanetDetails = withChildFunction(withData(ItemDetails, getPlanet), () => (
  <>
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Population" field="population" />
    <Record label="Diameter" field="diameter" />
  </>
));

const mapMethodToProps = (swapiService) => ({ getData: swapiService.getPlanet });

export default withSwapiService(PlanetDetails, mapMethodToProps);
