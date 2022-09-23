import { useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem';
import { useState } from 'react';

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
        <div>
        <p>Step 1: Select Your Pizza</p>
        <table>
          <tbody>
            {pizzas.map(pizza => <PizzaItem key={pizza.id} pizza={pizza}/>)}
          </tbody>
        </table>
        <button>NEXT</button>
      </div>
    ) // end of return.

} // End of PizzaMenu function.

export default PizzaMenu;