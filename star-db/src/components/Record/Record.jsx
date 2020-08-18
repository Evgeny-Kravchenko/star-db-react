import React from 'react';

import './Record.scss';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {item[field]}
    </li>
  );
};

export default Record;
