import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './People-page.scss';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import ErrorIndicator from '../Error-indicator/Error-indicator';

const PeoplePageView = (props) => {
  const { selectedPerson, onPersonSelected } = props;
  return (
    <div className="application__items-descr items-descr">
      <div className="items-descr__item">
        <ItemList onItemSelected={onPersonSelected} />
      </div>
      <div className="items-descr__item">
        <PersonDetails personId={selectedPerson} />
      </div>
    </div>
  );
};

PeoplePageView.propTypes = {
  selectedPerson: PropTypes.number.isRequired,
  onPersonSelected: PropTypes.func.isRequired,
};

export default class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 1,
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson, hasError } = this.state;
    const errorIndicator = hasError ? <ErrorIndicator /> : null;
    const personPage = !hasError ? (
      <PeoplePageView selectedPerson={selectedPerson} onPersonSelected={this.onPersonSelected} />
    ) : null;
    return (
      <>
        {errorIndicator}
        {personPage}
      </>
    );
  }
}
