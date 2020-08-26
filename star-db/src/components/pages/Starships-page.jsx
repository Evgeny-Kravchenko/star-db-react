import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import { StarshipList } from '../sw-components';
import ErrorBoundry from '../Error-boundry';

const StarshipPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={(id) => history.push(id)} />
    </ErrorBoundry>
  );
};

StarshipPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(StarshipPage);
