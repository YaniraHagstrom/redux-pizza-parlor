import { useSelector } from "react-redux";
import './Header.css';

export default function Header(){

    const totalPrice = useSelector(store=> store.totalPrice)
    

    return (
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
            <h2>${totalPrice}</h2>
        </header>
    )
}

