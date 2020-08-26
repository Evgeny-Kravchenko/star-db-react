import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PersonList, PersonDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  let details;
  const itemList = <PersonList onItemSelected={(newId) => history.push(newId)} />;
  if (!id) {
    details = (
      <p className="select-item alert-warning p-2 text-center">You should select any item.</p>
    );
  } else {
    details = <PersonDetails itemId={id} />;
  }

  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

PeoplePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(PeoplePage);
