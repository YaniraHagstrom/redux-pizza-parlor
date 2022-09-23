import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';

function PizzaItem ({pizza}) {

    const dispatch = useDispatch();
    
    const addToCart = () => {
        setIsClicked(!isClicked)
        const action ={
            type: 'ADD_ITEM',
            payload:pizza
          }
          dispatch(action)
    }

    const removeFromCart = () => {
        const action ={
            type: 'REMOVE_ITEM',
            payload:pizza
          }
          dispatch(action)
    }

    const [isClicked, setIsClicked] = useState(true);

    const switchDisplayButton = () => {
        setIsClicked(!isClicked)
    }
    
    return (
        <>
        <tr>
          <td><img src={pizza.image_path}/></td>
          <td>{pizza.name}</td>
          <td>{pizza.description}</td>
          <td>{pizza.price}</td>
          <td>
            <button onClick={addToCart} hidden={!isClicked}>Add</button>
            <div onClick={switchDisplayButton}> {!isClicked ? <button onClick={removeFromCart}>Remove</button> : null} </div>
          </td>
        </tr>
        </>
      ); // end of return. 

} // end of PizzaItem

export default PizzaItem;