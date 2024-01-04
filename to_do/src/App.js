import Title from './components/Title.js';
import AddItem from './components/AddItem.js';
import React, { useState } from 'react';
import TodoList from './containers/TodoList.js';

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <div>
      <Title />
      <TodoList items={items} setItems={setItems}/>
      <AddItem item={item} setItem={setItem} handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
