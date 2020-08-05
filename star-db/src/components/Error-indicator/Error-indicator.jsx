import React from 'react';

import './Error-indicator.scss';

import icon from './death-star-icon.png';

const ErrorIndicator = () => {
  return (
    <div className="alert alert-dismissible alert-danger error-indicator">
      <span>
        <strong>BOOM!</strong>
      </span>
      <img className="error-indicator__icon" src={icon} alt="Error" />
      <span>Something has gone wrong.</span>
      <span>But we already sent droids to fix it.</span>
    </div>
  );
};

export default ErrorIndicator;
