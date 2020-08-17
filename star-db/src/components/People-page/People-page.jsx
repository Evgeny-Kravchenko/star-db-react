import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './People-page.scss';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PeoplePageView = (props) => {
  const { selectedPerson, onPersonSelected, getData } = props;
  const itemList = (
    <ItemList onItemSelected={onPersonSelected} getData={getData}>
      {(i) => `${i.name}, ${i.birthYear}`}
    </ItemList>
  );
  const personDetails = <PersonDetails personId={selectedPerson} />;
  return (
    <ErrorBoundry>
      <Row left={itemList} right={personDetails} />
    </ErrorBoundry>
  );
};

PeoplePageView.propTypes = {
  selectedPerson: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPersonSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
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
    const { getData } = this.props;
    return (
      <PeoplePageView
        selectedPerson={selectedPerson}
        onPersonSelected={this.onPersonSelected}
        getData={getData}
      />
    );
  }
}

PeoplePage.propTypes = {
  getData: PropTypes.func.isRequired,
};
