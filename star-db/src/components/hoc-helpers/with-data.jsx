import React, { Component } from 'react';

import Spinner from '../Spinner';
import ErrorIndicator from '../Error-indicator';

const withData = (View) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: true,
        error: false,
      };
    }

    componentDidMount() {
      const { itemId, getData } = this.props;
      if (getData) {
        getData(itemId).then((data) => {
          this.setState({ data, loading: false });
        });
      }
    }

    componentDidUpdate({ itemId: itemIdPrev }) {
      const { itemId } = this.props;
      if (itemId !== itemIdPrev) {
        this.updateItem();
      }
    }

    updateItem() {
      const { itemId, getData } = this.props;

      this.setState({ loading: true, error: false });
      getData(itemId)
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return (
          <div className="item-spinner">
            <Spinner />
          </div>
        );
      }
      if (error) {
        return <ErrorIndicator />;
      }
      if (!data) {
        return <span>Please, select item</span>;
      }
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
