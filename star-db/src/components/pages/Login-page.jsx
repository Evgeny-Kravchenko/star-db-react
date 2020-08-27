import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginPage = ({ isLoggedIn, onLogin, changeActivePage, history }) => {
  return (
    <div className="jumbotron d-flex justify-content-center flex-column mx-2">
      <p className="text-center">
        {!isLoggedIn ? 'Login to see the secret page!!!' : 'You logged in'}
      </p>
      <button
        className="btn btn-primary mx-auto"
        onClick={() => {
          onLogin();
          if (!isLoggedIn) {
            changeActivePage(null);
            history.push('/');
          }
        }}
        type="button"
      >
        {!isLoggedIn ? 'Login' : 'Logout'}
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(LoginPage);
