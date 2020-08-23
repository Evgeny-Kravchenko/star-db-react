import React, { Component } from 'react';

import { StarshipList, StarshipDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const StarshipPageView = (props) => {
  const { onItemSelected, selectedItem } = props;
  const itemList = <StarshipList onItemSelected={onItemSelected} />;
  const details = <StarshipDetails itemId={selectedItem} />;
  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

export default class StarshipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 2,
    };
  }

  onItemSelected = (id) => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return <StarshipPageView selectedItem={selectedItem} onItemSelected={this.onItemSelected} />;
  }
}
