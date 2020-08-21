import React from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import Row from '../Row';
import { PlanetList, StarshipList, StarshipDetails, PlanetDetails } from '../sw-components';

const App = () => {
  const planetList = <PlanetList>{(i) => `${i.name}`}</PlanetList>;
  const starshipList = <StarshipList>{(i) => `${i.name}`}</StarshipList>;
  const planetDetails = (
    <PlanetDetails itemId={2} />
  );
  const starshipDetails = (
    <StarshipDetails itemId={5} />
  );

  return (
    <div className="application">
      <Header />
      <RandomPlanet />
      <PeoplePage />
      <Row left={planetList} right={planetDetails} />
      <Row left={starshipList} right={starshipDetails} />
    </div>
  );
};

export default App;
