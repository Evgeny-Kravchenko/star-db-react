import React, { Component } from 'react';
import './Person-details.scss';
import PropTypes from 'prop-types';

import SwapiService from '../../services/swapi.service';

import Spinner from '../Spinner';

const PersonView = (props) => {
  const { name, gender, birthYear, eyeColor, imageUrl } = props;
  return (
    <div className="card-body person-details__body">
      <img className="person-details__image" src={imageUrl} alt={name} />
      <div className="person-details__description">
        <h4 className="card-title">{name}</h4>
        <ul className="person-details__items">
          <li className="list-group-item">Gender: {gender}</li>
          <li className="list-group-item">Birth year: {birthYear}</li>
          <li className="list-group-item">Eye color: {eyeColor}</li>
        </ul>
      </div>
    </div>
  );
};

PersonView.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate({ personId: personIdPrev }) {
    const { personId } = this.props;
    if (personId !== personIdPrev) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (personId) {
      this.setState({ loading: true });
      this.swapiService.getPerson(personId).then((person) => {
        this.setState({ person, loading: false });
      });
    }
  }

  render() {
    const { person, loading } = this.state;
    if (!person) {
      return <span>Select a person from a list</span>;
    }
    const { name, gender, birthYear, eyeColor, imageUrl } = person;
    const spinner = loading ? <Spinner /> : null;
    const personView = !loading ? (
      <PersonView
        name={name}
        gender={gender}
        birthYear={birthYear}
        eyeColor={eyeColor}
        imageUrl={imageUrl}
      />
    ) : null;
    return (
      <div className="card border-primary mb-3 person-details">
        {spinner}
        {personView}
      </div>
    );
  }
}

PersonDetails.propTypes = {
  personId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
