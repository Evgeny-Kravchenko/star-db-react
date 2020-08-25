import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import StarshipDetails from '../sw-components/Starship-details';

import { SwapiServiceProvider } from '../Swapi-service-context';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/swapi.service';

const App = () => {
  const swapiService = new SwapiService();

  const [activePage, setActivePage] = useState('people');

  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className="application">
            <Header activePage={activePage} changeActivePage={changeActivePage} />
            <RandomPlanet />
            <Route
              path="/"
              render={() => <h2 className="text-center my-5">Welcome to StarDB</h2>}
              exact
            />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetPage} />
            <Route path="/starships" component={StarshipPage} exact />
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
