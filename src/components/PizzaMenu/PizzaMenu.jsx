import { useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useState } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './PizzaMenu.css'

function PizzaMenu () {

    const [pizzas, setPizzas]= useState([]);

    useEffect(() => {
        renderPizza();
      }, []);

    const renderPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        })
        .then((getRes) => {
            console.log('OUR DATA IS:', getRes.data);
            setPizzas(getRes.data);
     
        })
        .catch((getErr) => {
            console.log('CLIENT GET ROUTE FAILED', getErr);
        })

    } // End of renderPizza.

    return (
        <div className='pizzaMenu'>
          <h2 className='header'>Step 1: Select Your Pizza</h2>
          <table className='pizzaTable'>
            <tbody>
              {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza}/>)}
            </tbody>
          </table>
          <Link to='/customer' className='submitCart'><button>NEXT</button></Link>
      </div>
    ) // end of return.

} // End of PizzaMenu function.

export default PizzaMenu;