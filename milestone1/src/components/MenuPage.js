// src/components/MenuPage.js
import React, { useState } from 'react';

const MenuPage = () => {
  const [filter, setFilter] = useState('');

  const menuItems = [
    { name: 'Pizza', category: 'Main Course', price: '450', description: 'Delicious cheesy pizza', img: 'https://th.bing.com/th/id/OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Burger', category: 'Main Course', price: '67', description: 'burger', img: 'https://th.bing.com/th/id/OIP.g_EYshV4TBrKFonMmN2KEgHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'WRAP', category: 'STARTERS', price: '90', description: 'Chocolate cake', img: 'https://th.bing.com/th/id/OIP.gwBra6BN2laA5CT8fv3VXAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'ROLL', category: 'Starters', price: '66', description: 'Fresh garden salad', img: 'https://th.bing.com/th/id/OIP.hFbaLcAw4s1vMSX3yrqgZQHaEc?w=312&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7.png?text=Salad' },
  ];

  const filteredItems = menuItems.filter(item => 
    item.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="menu-page">
      <h2>Menu</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Main Course">Main Course</option>
        <option value="Desserts">Desserts</option>
        <option value="Starters">Starters</option>
      </select>

      <div className="menu-items">
        {filteredItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
