import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { StarshipList, StarshipDetails } from '../sw-components';
import ErrorBoundry from '../Error-boundry';
import Row from '../Row';

const StarshipPage = ({ history, match }) => {
  const { id } = match.params;
  let details;
  const itemList = <StarshipList onItemSelected={(newId) => history.push(newId)} />;
  if (!id) {
    details = (
      <p className="select-item alert-warning p-2 text-center">You should select any item.</p>
    );
  } else {
    details = <StarshipDetails itemId={id} />;
  }
  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

StarshipPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(StarshipPage);
