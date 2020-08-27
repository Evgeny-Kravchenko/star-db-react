import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { PlanetList, PlanetDetails } from '../sw-components';
import Row from '../Row';
import ErrorBoundry from '../Error-boundry';

const PlanetPage = ({ history, match }) => {
  const { id } = match.params;
  let details;
  const itemList = <PlanetList onItemSelected={(newId) => history.push(newId)} />;
  if (!id) {
    details = (
      <p className="select-item alert-warning p-2 text-center">You should select any item.</p>
    );
  } else {
    details = <PlanetDetails itemId={id} />;
  }
  return (
    <ErrorBoundry>
      <Row left={itemList} right={details} />
    </ErrorBoundry>
  );
};

PlanetPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(PlanetPage);
