import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Item-list.scss';

import SwapiService from '../../services/swapi.service';

import Spinner from '../Spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  constructor(props) {
    super(props);
    this.state = {
      peopleList: null,
    };
  }

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({ peopleList });
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return (
        <div className="item-spinner">
          <Spinner />
        </div>
      );
    }
    const { onItemSelected } = this.props;
    const peopleListElements = peopleList.map(({ id, name }) => (
      <button
        type="button"
        key={id}
        className="list-group-item list-group-item-action items-list__item"
        onClick={() => onItemSelected(id)}
      >
        {name}
      </button>
    ));
    return <div className="list-group items-list">{peopleListElements}</div>;
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
