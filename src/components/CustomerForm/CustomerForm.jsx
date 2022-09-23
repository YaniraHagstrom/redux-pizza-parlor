import './CustomerForm.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function CustomerForm(){

    const [customerName, setCustomerName] = useState('');
    const [customerAddress, setCustomerAddress]= useState('');
    const [customerCity, setCustomerCity]= useState('');
    const [customerZip, setCustomerZip]= useState('');
    const [type, setType] = useState('');
    
    const customerData = {
        customer_name: customerName, 
        street_address: customerAddress,
        city: customerCity,
        zip: Number(customerZip),
        type: type
    }

    const dispatch = useDispatch();

    const handleType= (e)=> {
        setType(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(customerData);
        // example data: {customer_name: 'Yanira', street_address: 'bubbles', city: 'woohoo', zip: '90210', type: 'delivery'}

        if(!customerName || !customerAddress || !customerCity || !customerZip || !type){
            alert('Please provide all of your information');
        }
        else {
            const action = {
                type: 'ADD_CUSTOMER',
                payload: customerData
            }
            dispatch(action);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={customerName}
                    onChange={ e => setCustomerName(e.target.value)}
                    placeholder="Name"
                />
                <input 
                    type="text"
                    value={customerAddress}
                    onChange={e => setCustomerAddress(e.target.value)}
                    placeholder="Street Address"
                />
                <input 
                    type="text"
                    value={customerCity}
                    onChange={e => setCustomerCity(e.target.value)}
                    placeholder="City"
                />
                <input 
                    type="number    "
                    value={customerZip}
                    onChange={e => setCustomerZip(e.target.value)}
                    placeholder="Zip"
                />
                <label className="container">Pickup
                    <input  
                        type="radio"
                        checked={type === 'pickup'}
                        value = 'pickup'
                        onChange={handleType}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container">Delivery
                    <input  
                        type="radio"
                        checked={type === 'delivery'}
                        value = 'delivery'
                        onChange={handleType}
                    />
                    <span className="checkmark"></span>
                </label>
                <button>Submit</button>
            </form>
            <Link to='/checkout'>
                <button>Next</button>
            </Link>
        </>
    )
}