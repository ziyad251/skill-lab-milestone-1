
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import OrderCustomization from './components/OrderCustomization';
import Cart from './components/Cart';
import ContactPage from './components/ContactPage';
import AboutUsPage from './components/AboutUsPage';
import SignUpPage from './components/SignUpPage';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm';
import './styles.css';

const App = () => {
  
  const [cartItems, setCartItems] = useState([]);
  const [menuItems] = useState([
    { name: 'Pizza', price: 450, img: 'https://via.placeholder.com/400x300.png?text=Pizza', description: 'Delicious cheesy pizza' },
    { name: 'Burger', price: 67, img: 'https://via.placeholder.com/400x300.png?text=Burger', description: 'Juicy burger' },
    
  ]);

  
  const addToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  
  const updateItemQuantity = (index, newQuantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
  };

  
  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <div className="App">
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/sign-up">Sign Up</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </nav>

        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route 
            path="/menu" 
            render={() => <MenuPage menuItems={menuItems} addToCart={addToCart} />} 
          />
          <Route 
            path="/order-customization" 
            render={(props) => <OrderCustomization {...props} />} 
          />
          <Route 
            path="/cart" 
            render={() => 
              <Cart 
                cartItems={cartItems} 
                updateItemQuantity={updateItemQuantity} 
                removeItem={removeItem} 
              />
            } 
          />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/feedback" component={FeedbackForm} />
        </Switch>

       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
