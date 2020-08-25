import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PeoplePageView = (props) => {
  const { onItemSelected, selectedItem } = props;
  const itemList = <PersonList onItemSelected={onItemSelected} />;
  const details = <PersonDetails itemId={selectedItem} />;
  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

PeoplePageView.propTypes = {
  onItemSelected: PropTypes.func,
  selectedItem: PropTypes.number,
};

PeoplePageView.defaultProps = {
  onItemSelected: () => {},
  selectedItem: 1,
};

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 1,
    };
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return <PeoplePageView selectedItem={selectedItem} onItemSelected={this.onItemSelected} />;
  }
}
