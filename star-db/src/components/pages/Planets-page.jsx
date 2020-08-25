import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PlanetPageView = (props) => {
  const { onItemSelected, selectedItem } = props;
  const itemList = <PlanetList onItemSelected={onItemSelected} />;
  const details = <PlanetDetails itemId={selectedItem} />;
  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

PlanetPageView.propTypes = {
  onItemSelected: PropTypes.func,
  selectedItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

PlanetPageView.defaultProps = {
  onItemSelected: () => {},
  selectedItem: 5,
};

export default class PlanetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 5,
    };
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return <PlanetPageView selectedItem={selectedItem} onItemSelected={this.onItemSelected} />;
  }
}
