import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState } from "react";
// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from './components/Shop';
import Cart from './components/Cart';
// Styles
import "./styles/css/reset.css"
import "./styles/css/App.css";


function App() {

  const [user, setUser] = useState({
    name: 'Guest',
  });

  const [cart, setCart] = useState([]);

  const [viewCart, setViewCart] = useState(false);

  const addToCart = (product) => {
    let boo = false;
    cart.forEach(item => {
      if (item.name === product.name) {
        item.quantity = Number(item.quantity) + Number(product.quantity);
        boo = true;
      };
    });
    document.querySelector('.product-overlay').style.transform = 'scale(0)';
    if (boo) return;
    setCart(cart => [...cart, product]);
  };

  const onClick = () => setViewCart(!viewCart);

  let content = (
    <div className="app">
      <Router>
        <Nav user={user} onClick={onClick} />
        <Routes>
          <Route exact path="shopping-cart/" element={<Home />} />
          <Route exact path="shopping-cart/shop" element={<Shop user={user} addToCart={addToCart} />} />
        </Routes>
        {viewCart ? <Cart cart={cart} setCart={setCart} onClick={onClick} /> : null}
      </Router>
    </div>
  );

  return content;
}

export default App;
