import React, { useState } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import ItemList from './components/ItemList';
import NewItem from './components/NewItem';

import { Item } from './item.model';

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const itemAddHandler = (text: string) => {
    setItems(prevItems => [...prevItems, { id: uuid(), text: text }]);
  };

  const itemDeleteHandler = (itemId: string) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== itemId);
    });
  }

  return (
    <div className="App">
      <h1>Massive Shopping List</h1>
      <NewItem onAddItem={itemAddHandler} />
      <ItemList items={items} onDeleteItem={itemDeleteHandler} />
    </div>
  );
}

export default App;
