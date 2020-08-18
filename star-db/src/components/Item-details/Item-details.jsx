import React, { Component } from 'react';
import './Item-details.scss';

import Spinner from '../Spinner';

const ItemView = (props) => {
  const { name, gender, birthYear, eyeColor, imageUrl } = props;
  return (
    <div className="card-body item-details__body">
      <img className="item-details__image" src={imageUrl} alt={name} />
      <div className="item-details__description">
        <h4 className="card-title">{name}</h4>
        <ul className="item-details__items">
          <li className="list-group-item">Gender: {gender}</li>
          <li className="list-group-item">Birth year: {birthYear}</li>
          <li className="list-group-item">Eye color: {eyeColor}</li>
        </ul>
      </div>
    </div>
  );
};

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      loading: false,
    };
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate({ itemId: itemIdPrev }) {
    const { itemId } = this.props;
    if (itemId !== itemIdPrev) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (itemId) {
      this.setState({ loading: true });
      getData(itemId).then((item) => {
        this.setState({ item, loading: false });
      });
    }
  }

  render() {
    const { item, loading } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }
    const { name, gender, birthYear, eyeColor, imageUrl } = item;
    const spinner = loading ? <Spinner /> : null;
    const itemView = !loading ? (
      <ItemView
        name={name}
        gender={gender}
        birthYear={birthYear}
        eyeColor={eyeColor}
        imageUrl={imageUrl}
      />
    ) : null;
    return (
      <div className="card border-primary mb-3 item-details">
        {spinner}
        {itemView}
      </div>
    );
  }
}
