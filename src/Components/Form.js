// Form.js
import React, { useState } from 'react';

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
      <h3>What do you need for your ✨ trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num} > {num} </option>
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

export default Form;