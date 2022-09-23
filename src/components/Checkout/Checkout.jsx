import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import "./Checkout.css"

//COMPONENTS
import CheckoutTable from "./CheckoutTable";


function CheckOut(){
    const customer = useSelector(store => store.customer);
    const cart = useSelector(store => store.cartReducer);
    const totalPrice = useSelector(store => store.totalPrice);

    //send total order to DB
    const addOrder = () => {
        let pizzas = cart.map(pizza => ({...pizza, quantity: 1}));
        console.log({...customer, total: totalPrice, pizzas: pizzas});

        axios({
         method: 'POST',
         url: '/api/order',
         data: {...customer, total: totalPrice, pizzas: pizzas}
        }).then((response) => {
            console.log(response)
            sendBackToMenu();
            clearCart();
        }).catch((error) => {
            console.log('addOrder failed,', error);
        });
    };

    const dispatch = useDispatch();
    const clearCart = () => {
        const action = {type: 'CLEAR_CART'};
        dispatch(action);
    }

    const history = useHistory();
    const sendBackToMenu = () => {
        alert('Thank you for your order!');
        history.push('/');
    }


    return (
        <div className="checkout">
            <h2>Step 3: Checkout</h2>
                <ul>
                    <li>{customer.customer_name}</li>
                    <li>{customer.street_address}</li>
                    <li>{customer.city} {customer.zip}</li>
                </ul>
            <p>{customer.type}</p>
            <CheckoutTable />
            <h2>Total: {totalPrice}</h2>
            <button onClick={addOrder}>Checkout</button>
        </div>
    )
}

export default CheckOut;
