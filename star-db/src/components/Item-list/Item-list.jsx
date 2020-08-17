import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Item-list.scss';

import Spinner from '../Spinner';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: null,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return (
        <div className="item-spinner">
          <Spinner />
        </div>
      );
    }
    const { onItemSelected } = this.props;
    const { children: renderItem } = this.props;
    const itemListElements = itemList.map((item) => {
      const { id } = item;
      const label = renderItem(item);
      return (
        <button
          type="button"
          key={id}
          className="list-group-item list-group-item-action items-list__item"
          onClick={() => onItemSelected(id)}
        >
          {label}
        </button>
      );
    });
    return <div className="list-group items-list">{itemListElements}</div>;
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
