import React from 'react';
import PropTypes from 'prop-types';

import './Record.scss';

const Record = ({ data, field, label }) => {
  return (
    <li className="list-group-item">
      {label}: {data[field]}
    </li>
  );
};

Record.propTypes = {
  data: PropTypes.instanceOf(Object),
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Record.defaultProps = {
  data: {},
};

export default Record;
