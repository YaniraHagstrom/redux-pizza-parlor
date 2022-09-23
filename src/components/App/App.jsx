import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components
import Header from '../Header/Header';
import PizzaMenu from '../PizzaMenu/PizzaMenu';
import CustomerForm from '../CustomerForm/CustomerForm';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';


function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <div>
          <Route exact path="/">
            {/* <PizzaMenu  /> */}
          </Route>
          <Route exact path="/customer">
            <CustomerForm />
          </Route>
          <Route exact path="/checkout">
            {/* <Checkout /> */}
          </Route>
          <Route exact path="/admin">
            {/* <Admin /> */}
          </Route>
        </div>
      </Router>
      {/* <img src='images/pizza_photo.png' /> */}
      {/* <p>Pizza is great.</p> */}
    </div>
  );
}

export default App;
