import React from 'react';
import './App.scss';

import Header from '../Header';
import ItemList from '../Item-list';
import PersonDetails from '../Person-details';
import RandomPlanet from '../Random-planet';

function App() {
  return (
    <div className="application">
      <Header />
      <RandomPlanet />
      <div className="application__items-descr items-descr">
        <div className="items-descr__item">
          <ItemList />
        </div>
        <div className="items-descr__item">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
