import React from 'react';
import PropTypes from 'prop-types';

import './Item-details.scss';

const ItemDetails = (props) => {
  const { children, data } = props;
  const { name, imageUrl } = data;
  return (
    <div className="card border-primary mb-3 item-details">
      <div className="card-body item-details__body">
        <img className="item-details__image" src={imageUrl} alt={name} />
        <div className="item-details__description">
          <h4 className="card-title">{name}</h4>
          <ul className="item-details__items">
            {React.Children.map(children().props.children, (child) => {
              return React.cloneElement(child, { data });
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ItemDetails;
