import React from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

import { SwapiServiceProvider } from '../Swapi-service-context';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/swapi.service';

const App = () => {
  const swapiService = new SwapiService();

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <div className="application">
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <PlanetPage />
          <StarshipPage />
        </div>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
