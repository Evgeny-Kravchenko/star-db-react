import React from 'react';
import { SwapiServiceConsumer } from '../Swapi-service-context';

const withSwapiService = (Wrapped, mapMethodToProps) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {(swapiService) => {
          const serviceProp = mapMethodToProps(swapiService);
          // eslint-disable-next-line react/jsx-props-no-spreading
          return <Wrapped {...props} {...serviceProp} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default withSwapiService;
