// Footer.js
import React from 'react';

const Stats = ({ items }) => {
  
  const totalItems = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packingPercentage = totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer className='stats'>
 <em>
  {items.length === 0
    ? "Pack some item in list"
    : packingPercentage === 100
    ? "You Got Everything 🚓"
    : `You have ${totalItems} items in your List, and you have packed ${packedItems} already (${packingPercentage}%)`}
</em>

    </footer>
  );
}

export default Stats;