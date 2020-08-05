import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';

export default class App extends Component {
  render() {
    return (
      <div className="application">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
