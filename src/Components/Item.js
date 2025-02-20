// Item.js
import React from 'react';

function Item({ item, togglePacked, handleDelete }) {
  return (
    <li>
      <input type='checkbox' checked={item.packed} onClick={() => togglePacked(item.id)} />
     
      <span style={item.packed ? { textDecoration: "line-through" , color:"green" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className='btn-delete' onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  );
}

export default Item;