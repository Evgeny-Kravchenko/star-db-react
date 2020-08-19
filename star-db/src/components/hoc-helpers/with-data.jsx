import React, { Component } from 'react';
import Spinner from '../Spinner';

const withData = (View, getData) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      getData().then((data) => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;
      if (!data) {
        return (
          <div className="item-spinner">
            <Spinner />
          </div>
        );
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
