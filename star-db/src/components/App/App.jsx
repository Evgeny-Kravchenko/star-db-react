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
  const path = window.location.pathname.match(/starships|planets|people/i);
  const [activePage, setActivePage] = useState(path && path[0]);

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
            <Route path="/people" component={PeoplePage} exact />
            <Route path="/planets" component={PlanetPage} exact />
            <Route path="/starships/" component={StarshipPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId={id} />;
              }}
            />
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
