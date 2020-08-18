import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi.service';
import ItemDetails from '../Item-details';
import Row from '../Row';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const { getPlanet, getStarship } = this.swapiService;
    const planetDetails = <ItemDetails itemId={11} getData={getPlanet} />;
    const starshipDetails = <ItemDetails itemId={5} getData={getStarship} />;

    return (
      <div className="application">
        <Header />
        <RandomPlanet />
        <PeoplePage getData={this.swapiService.getAllPeople} />
        <Row left={planetDetails} right={starshipDetails} />
      </div>
    );
  }
}
