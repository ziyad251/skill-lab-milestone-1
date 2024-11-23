
import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Our Restaurant!</h1>
        <p>Explore our delicious menu and enjoy your meal.</p>
      </header>

      <section className="featured-menu">
        <h2>Featured Items</h2>
        <div className="menu-item">
          <img src="https://th.bing.com/th/id/OIP.RWaaZCnAJwE8O0FxwD7y0AHaEo?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Pizza" />
          <p>Pizza</p>
        </div>
        <div className="menu-item">
          <img src="https://th.bing.com/th/id/OIP.g_EYshV4TBrKFonMmN2KEgHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Burger" />
          <p>Burger</p>
        </div>
        <div className="menu-item">
          <img src="https://th.bing.com/th/id/OIP.gwBra6BN2laA5CT8fv3VXAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="WRAP" />
          <p>ROLL</p>
        </div>
        <div className="menu-item">
          <img src="https://th.bing.com/th/id/OIP.hFbaLcAw4s1vMSX3yrqgZQHaEc?w=312&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7.png?text=Salad" alt="ROLL" />
          <p>WRAP</p>
          </div>
      </section>

      <section className="promotions">
        <h3>Special Offers</h3>
        <p>Check out our seasonal discounts and promotions!</p>
      </section>
    </div>
  );
};

export default HomePage;
