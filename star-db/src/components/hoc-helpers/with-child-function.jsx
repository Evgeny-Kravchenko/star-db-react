import React from 'react';

const withChildFunction = (Wrapped, fn) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

export default withChildFunction;
