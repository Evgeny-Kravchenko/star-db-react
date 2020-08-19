import React from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import Row from '../Row';
import { PlanetList, StarshipList, StarshipDetails, PlanetDetails } from '../sw-components';
import Record from '../Record';

const App = () => {
  const planetList = <PlanetList>{(i) => `${i.name}`}</PlanetList>;
  const starshipList = <StarshipList>{(i) => `${i.name}`}</StarshipList>;
  const planetDetails = (
    <PlanetDetails itemId={2}>
      <Record label="Rotation period" field="rotationPeriod" />
      <Record label="Population" field="population" />
      <Record label="Diameter" field="diameter" />
    </PlanetDetails>
  );
  const starshipDetails = (
    <StarshipDetails itemId={5}>
      <Record label="Model" field="model" />
      <Record label="Length" field="length" />
      <Record label="Cost" field="costInCredits" />
    </StarshipDetails>
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
