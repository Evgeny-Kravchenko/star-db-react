import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './People-page.scss';

import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import ErrorIndicator from '../Error-indicator/Error-indicator';

const PeoplePageView = (props) => {
  const { selectedPerson, onPersonSelected, getData } = props;
  const itemList = (
    <ItemList
      onItemSelected={onPersonSelected}
      getData={getData}
      renderItem={({ name, gender, birthYear }) => `${name}, ${gender}, ${birthYear}`}
    />
  );
  const personDetails = <PersonDetails personId={selectedPerson} />;
  return (
    <div className="application__items-descr items-descr">
      <div className="items-descr__item">{itemList}</div>
      <div className="items-descr__item">{personDetails}</div>
    </div>
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
    const { getData } = this.props;
    const errorIndicator = hasError ? <ErrorIndicator /> : null;
    const personPage = !hasError ? (
      <PeoplePageView
        selectedPerson={selectedPerson}
        onPersonSelected={this.onPersonSelected}
        getData={getData}
      />
    ) : null;
    return (
      <>
        {errorIndicator}
        {personPage}
      </>
    );
  }
}

PeoplePage.propTypes = {
  getData: PropTypes.func.isRequired,
};
