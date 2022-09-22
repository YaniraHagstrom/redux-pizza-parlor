import { useSelector } from "react-redux";
import "./Checkout.css"

function CheckoutTable(){
    const pizzas = useSelector(store => store.cartReducer);
    // DUMMY DATA
    // const pizzas = [{id: 1, name: 'cheese', price: 10.00}, {id: 2, name: 'pepperoni', price: 9.34}, {id: 3, name: 'veggie', price: 7.60}];


    return (
        <table className="checkout_table">
                <thead className="checkout_table_header">
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody className="checkout_table_body">
                    {pizzas.map(pizza => 
                        <tr key={pizza.id}>
                            <td>{pizza.name}</td>
                            <td>{pizza.price}</td>
                        </tr>
                    )}
                </tbody>
            </table>
    )
}

export default CheckoutTable;