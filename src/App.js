import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import PackingList from './Components/PackingList';
import Footer from './Components/Footer';

const initialItem = [
  {
    id: 1,
    description: "passport",
    quantity: 1,
    packed: false
  }
];

function App() {
  const [items, setItems] = useState(initialItem);
  const [sortOrder, setSortOrder] = useState('inputOrder');

  const addItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const togglePacked = (id) => {
    setItems(prevItems =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleClear = () => {
    setItems([]); 
  };

  const handleSort = (event) => {
    const selectedOption = event.target.value;
    setSortOrder(selectedOption);
    let sortedItems = [...items];
  
    if (selectedOption === 'alphabetical') {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (selectedOption === 'descending') {
      sortedItems.sort((a, b) => b.description.localeCompare(a.description));
    } 
  
    setItems(sortedItems);
  };
  

  return (
    <div>
      <Header />
      <Form addItem={addItem} />
      <PackingList 
        items={items} 
        togglePacked={togglePacked} 
        handleDelete={handleDelete} 
        handleClear={handleClear} 
        handleSort={handleSort} 
        sortOrder={sortOrder}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
