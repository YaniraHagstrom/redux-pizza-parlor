import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin (){
    useEffect(() => {
        getOrders();
    }, []);

    const [orders, setOrders] = useState([]);

    const getOrders = () => {
        axios({
            method: 'GET', 
            url: '/api/order'
        }).then((response) => {
            console.log(response.data);
            setOrders(response.data);
        }).catch((error) => {
            console.log('getOrders failed', error);
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => 
                    <tr>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>)}
            </tbody>
        </table>
    )
}

export default Admin;