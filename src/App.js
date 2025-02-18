import './index.css';
import { useState } from 'react';

const initialItem = [
  {
    id: 1,
    description: "passport",
    quantity: 2,
    packed: false
  },
  {
    id: 2,
    description: "Socks",
    quantity: 4,
    packed: false
  },
  {
    id: 3,
    description: "mobile",
    quantity: 43,
    packed: true
  },
  {
    id: 4,
    description: "Laptop",
    quantity: 23,
    packed: false
  }
];

const Logo = () => {
  return (
    <h1>🏝️ Far Away 🧳</h1>
  );
}

function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (description.trim() !== "") {
      const newItem = {
        id: Math.random(), 
        description,
        quantity: parseInt(quantity),
        packed: false
      };
      addItem(newItem);  
      setDescription(""); 
      setQuantity(1);  
    }
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input 
        type='text' 
        placeholder='Add item...' 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">ADD</button>
    </form>
  );
}

const PackingList = ({ items, togglePacked }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} togglePacked={togglePacked} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, togglePacked }) {
  return (
    <li>
      <input type='checkbox' checked={item.packed} onClick={() => togglePacked(item.id)} />

      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

const Stats = () => {
  return (
    <footer className='stats'>
      <em>You have X items in your List, and you have packed already X (X%)</em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItem); 

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

  return (
    <div>
      <Logo />
      <Form addItem={addItem} />
      <PackingList items={items} togglePacked={togglePacked} />
      <Stats />
    </div>
  );
}

export default App;
