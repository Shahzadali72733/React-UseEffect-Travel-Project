import React from 'react';
import Item from './Item';

const PackingList = ({ items, togglePacked, handleDelete, handleClear, handleSort, sortOrder }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} togglePacked={togglePacked} handleDelete={handleDelete} />
        ))}
      </ul>

      <div className="filter">
        <select value={sortOrder} onChange={handleSort}>
          <option value="descending">Sort in descending order</option>
          <option value="alphabetical">Sort alphabetically</option>
        </select>
        <button onClick={handleClear}>Clear List</button> 
      </div>
    </div>
  );
};

export default PackingList;
