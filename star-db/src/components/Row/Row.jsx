import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="application__items-descr items-descr">
      <div className="items-descr__item">{left}</div>
      <div className="items-descr__item">{right}</div>
    </div>
  );
};

Row.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};

export default Row;
