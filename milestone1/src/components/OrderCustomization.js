
import React, { useState } from 'react';

const OrderCustomization = ({ item }) => {
  const [size, setSize] = useState('Medium');
  const [extras, setExtras] = useState([]);

  const handleExtrasChange = (e) => {
    const value = e.target.value;
    setExtras(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  return (
    <div className="order-customization">
      <h2>{item.name}</h2>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>

      <label>
        Size:
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>

      <div>
        <p>Extras:</p>
        <label>
          <input type="checkbox" value="Cheese" onChange={handleExtrasChange} /> Cheese
        </label>
        <label>
          <input type="checkbox" value="Bacon" onChange={handleExtrasChange} /> Bacon
        </label>
      </div>

      <button>Add to Cart</button>
    </div>
  );
};

export default OrderCustomization;
