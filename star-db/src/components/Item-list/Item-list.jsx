import React from 'react';

import './Item-list.scss';

const ItemList = (props) => {
  const { onItemSelected, children: renderItem, data } = props;
  const itemListElements = data.map((item) => {
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
};

export default ItemList;
