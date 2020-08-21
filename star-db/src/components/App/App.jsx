import React from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import Row from '../Row';
import { PlanetList, StarshipList, StarshipDetails, PlanetDetails } from '../sw-components';

import { SwapiServiceProvider } from '../Swapi-service-context';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/swapi.service';

const App = () => {
  const planetList = <PlanetList>{(i) => `${i.name}`}</PlanetList>;
  const starshipList = <StarshipList>{(i) => `${i.name}`}</StarshipList>;
  const planetDetails = <PlanetDetails itemId={2} />;
  const starshipDetails = <StarshipDetails itemId={5} />;
  const swapiService = new SwapiService();

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <div className="application">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <Row left={planetList} right={planetDetails} />
          <Row left={starshipList} right={starshipDetails} />
        </div>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
