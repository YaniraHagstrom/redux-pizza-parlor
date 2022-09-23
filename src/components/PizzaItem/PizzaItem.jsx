import React from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import { useSelector } from 'react-redux';

function PizzaItem ({pizza}) {

    const totalPrice = useSelector(store=> store.totalPrice)

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
    const addPrice = () => {
      const action ={
        type: 'ADD_PRICE',
        payload:pizza.price
      }
      dispatch(action)
    }

    const subtractPrice = () => {
      const action ={
        type: 'SUBTRACT_PRICE',
        payload:pizza.price
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
            <div onClick={addPrice}><button onClick={addToCart} hidden={!isClicked}>Add</button></div>
            <div onClick={subtractPrice}>
              <div onClick={switchDisplayButton}> {!isClicked ? <button onClick={removeFromCart}>Remove</button> : null} </div>
            </div>
          </td>
        </tr>
        </>
      ); // end of return.
} // end of PizzaItem
export default PizzaItem;