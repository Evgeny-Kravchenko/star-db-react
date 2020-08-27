import React, { useState } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage } from '../pages';
import StarshipDetails from '../sw-components/Starship-details';

import { SwapiServiceProvider } from '../Swapi-service-context';
import ErrorBoundry from '../Error-boundry';
import SwapiService from '../../services/swapi.service';

const App = () => {
  const swapiService = new SwapiService();
  const path = window.location.pathname.match(/starships|planets|people|login/i);
  const [activePage, setActivePage] = useState(path && path[0]);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onLogin = () => {
    setLoggedIn((value) => !value);
  };

  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <ErrorBoundry>
      <SwapiServiceProvider value={swapiService}>
        <Router>
          <div className="application">
            <Header
              activePage={activePage}
              changeActivePage={changeActivePage}
              isLoggedIn={isLoggedIn}
            />
            <RandomPlanet />
            <Switch>
              <Route
                path="/"
                render={() => <h2 className="text-center my-5">Welcome to StarDB</h2>}
                exact
              />
              <Route path="/people/:id?" component={PeoplePage} exact />
              <Route path="/planets" component={PlanetPage} exact />
              <Route path="/starships/" component={StarshipPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={onLogin}
                    changeActivePage={changeActivePage}
                  />
                )}
                exact
              />
              <Route
                path="/secret"
                render={() => (
                  <SecretPage isLoggedIn={isLoggedIn} changeActivePage={changeActivePage} />
                )}
                exact
              />
              <Route render={() => <h2 className="text-center">Page not found</h2>} />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
