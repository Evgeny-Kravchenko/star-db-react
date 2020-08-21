import React, { Component } from 'react';

import './People-page.scss';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PeoplePageView = (props) => {
  const { onPersonSelected, selectedPerson } = props;
  const itemList = (
    <PersonList onItemSelected={onPersonSelected} />
  );
  const personDetails = (
    <PersonDetails itemId={selectedPerson} />
  );
  return (
    <ErrorBoundry>
      <Row left={itemList} right={personDetails} />
    </ErrorBoundry>
  );
};

export default class PeoplePage extends Component {
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
      <PeoplePageView selectedPerson={selectedPerson} onPersonSelected={this.onPersonSelected} />
    );
  }
}
