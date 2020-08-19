import React from 'react';

import './Row.scss';

const Row = ({ left, right }) => {
  return (
    <div className="application__items-descr items-descr">
      <div className="items-descr__item">{left}</div>
      <div className="items-descr__item">{right}</div>
    </div>
  );
};

export default Row;
