import React from 'react';

import './Record.scss';

const Record = ({ data, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {data[field]}
    </li>
  );
};

export default Record;
