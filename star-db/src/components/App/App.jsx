import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi.service';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="application">
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
      </div>
    );
  }
}
