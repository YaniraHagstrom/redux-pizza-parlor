import React, { useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// Reducers:

const cartReducer = (state=[], action)=>{
     if (action.type === 'ADD_ITEM'){
        return [...state, action.payload]
    }    
    else if (action.type === 'REMOVE_ITEM') {
        let newArray = state.filter(item => item.id !== action.payload.id)
        return newArray;
    }
    else if (action.type === 'CLEAR_CART'){
        return [];
    }

    // switch(action){
    //     case(action.type === 'ADD_ITEM'):
    //         //CODE
    //         break;
    //     case(action.type === 'REMOVE_ITEM'):
    //         //CODE
    //         break;
    //     case(action.type === 'CLEAR_CUT'):
    //         //CODE
    //         break;
    //     case(action.type === 'ADD_PRICE'):
    //         const totalPrice = state.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0);
    //         return totalPrice;
    //         break;

    //     case(acion.type === 'SUBTRACT PRICE'):
    //         //CODE
    // }

    return state;
}

const customer = (state = [], action) => {
    if (action.type === 'ADD_CUSTOMER'){

    }
    else if (action.type === 'YEET_CUSTOMER'){

    }
    return state;
}

const totalPrice = (state=0, action)=> {
    if (action.type === 'ADD_PRICE'){
        return state + Number(action.payload);
    }

    else if (action.type === 'SUBTRACT_PRICE'){
        return state - Number(action.payload);
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        cartReducer,
        customer,
        totalPrice
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
