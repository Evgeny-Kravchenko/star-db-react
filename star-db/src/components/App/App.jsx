import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import RandomPlanet from '../Random-planet';
import PeoplePage from '../People-page';
import SwapiService from '../../services/swapi.service';
import ItemDetails from '../Item-details';
import Row from '../Row';
import Record from '../Record';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const { getPlanet, getStarship } = this.swapiService;
    const planetDetails = (
      <ItemDetails itemId={11} getData={getPlanet}>
        <Record label="Rotation period" field="rotationPeriod" />
        <Record label="Population" field="population" />
        <Record label="Diameter" field="diameter" />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship}>
        <Record label="Model" field="model" />
        <Record label="Length" field="length" />
        <Record label="Cost" field="costInCredits" />
      </ItemDetails>
    );

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
