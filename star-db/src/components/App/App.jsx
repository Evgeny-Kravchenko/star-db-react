import React, { Component } from 'react';
import './App.scss';

import Header from '../Header';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import RandomPlanet from '../Random-planet';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 1,
    };
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className="application">
        <Header />
        <RandomPlanet />
        <div className="application__items-descr items-descr">
          <div className="items-descr__item">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="items-descr__item">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
