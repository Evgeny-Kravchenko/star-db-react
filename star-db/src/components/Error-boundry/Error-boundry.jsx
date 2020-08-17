import React, { Component } from 'react';
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
