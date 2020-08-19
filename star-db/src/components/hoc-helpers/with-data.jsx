import React, { Component } from 'react';
import Spinner from '../Spinner';

const withData = (View, getData) => {
  // eslint-disable-next-line react/display-name
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        loading: false,
      };
    }

    componentDidMount() {
      const { itemId } = this.props;
      this.setState({ loading: true });
      getData(itemId).then((data) => {
        this.setState({ data, loading: false });
      });
    }

    componentDidUpdate({ itemId: itemIdPrev }) {
      const { itemId } = this.props;
      if (itemId !== itemIdPrev) {
        this.updateItem();
      }
    }

    updateItem() {
      const { itemId } = this.props;
      if (itemId) {
        this.setState({ loading: true });
        getData(itemId).then((data) => {
          this.setState({ data, loading: false });
        });
      }
    }

    render() {
      const { data, loading } = this.state;
      if (!data && loading) {
        return (
          <div className="item-spinner">
            <Spinner />
          </div>
        );
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
