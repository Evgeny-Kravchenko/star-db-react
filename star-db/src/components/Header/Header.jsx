import React from 'react';

import './Header.scss';

const Header = () => (
  <div className="header">
    <h1 className="header__title">Star DB</h1>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          People
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Planets
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Starships
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
