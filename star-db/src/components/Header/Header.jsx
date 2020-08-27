import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './Header.scss';

const Header = (props) => {
  const { activePage, changeActivePage, isLoggedIn } = props;
  return (
    <div className="header">
      <Link to="/">
        <h1 className="header__title">Star DB</h1>
      </Link>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link ${activePage === 'people' ? 'active' : null}`}
            to="/people/"
            onClick={() => changeActivePage('people')}
          >
            People
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activePage === 'planets' ? 'active' : null}`}
            to="/planets"
            onClick={() => changeActivePage('planets')}
          >
            Planets
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activePage === 'starships' ? 'active' : null}`}
            to="/starships/"
            onClick={() => changeActivePage('starships')}
          >
            Starships
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activePage === 'login' ? 'active' : null}`}
            to="/login/"
            onClick={() => changeActivePage('login')}
          >
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activePage === 'secret' && isLoggedIn ? 'active' : null}`}
            to="/secret/"
            onClick={() => changeActivePage('secret')}
          >
            Secret page
          </Link>
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
  activePage: PropTypes.string,
  changeActivePage: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  activePage: '',
  changeActivePage: () => {},
};
export default Header;
