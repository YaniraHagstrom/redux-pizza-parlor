import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

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
        <table className='admin_table'>
            <thead className='admin_table_header'>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody className='admin_table_body'>
                {orders.map(order => 
                    <tr key={order.id}>
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