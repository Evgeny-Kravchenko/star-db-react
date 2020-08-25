import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../Error-indicator';

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorIndicator /> : children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.node.isRequired,
};
