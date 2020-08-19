import React, { Component } from 'react';

import './People-page.scss';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';
import Record from '../Record';

const PeoplePageView = (props) => {
  const { onPersonSelected, selectedPerson } = props;
  const itemList = (
    <PersonList onItemSelected={onPersonSelected}>{(i) => `${i.name}, ${i.birthYear}`}</PersonList>
  );
  const personDetails = (
    <PersonDetails itemId={selectedPerson}>
      <Record label="Gender" field="gender" />
      <Record label="Eye color" field="eyeColor" />
      <Record label="Birth year" field="birthYear" />
    </PersonDetails>
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
