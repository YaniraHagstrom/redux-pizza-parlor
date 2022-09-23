import { useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { useState, useEffect } from 'react';

export default function Header(){
    const [total, setTotal] = useState('')

    const totalPrice = useSelector(store=> store.totalPrice)
    // const location = useLocation();
    console.log(location.hash);
    // console.log(totalPrice)
    
    // const showTotal = ()=> {
    //     if (location.hash === '#/' || location.hash === '#/customer'){
    //         setTotal(`$${totalPrice}`);
    //     }
    //     else{
    //         setTotal('')
    //     }
    // }

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            {location.hash === '#/' || location.hash === '#/customer'  ? <h2>${totalPrice}</h2> : '' }
        </header>
    )
}

