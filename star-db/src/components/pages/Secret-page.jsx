import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const SecretPage = ({ isLoggedIn, changeActivePage }) => {
  if (!isLoggedIn) {
    setTimeout(() => {
      changeActivePage('login');
    }, 0);
    return <Redirect to="/login" />;
  }
  return (
    <div className="jumbotron text-center">
      <h3>This page is full of secrets!!!</h3>
    </div>
  );
};

SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  changeActivePage: PropTypes.func.isRequired,
};

export default SecretPage;
