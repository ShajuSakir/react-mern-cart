//here we make our http request to our backend to get the product details and add it to the cart

import * as actionTypes from '../constants/cartConstants';
import axios from 'axios'; //this help to make ajax requests

//takes in product id and quantity of product, return the async function which has access to the despatch function
//(this is why we use redux thunk to be able to do this)
export const addToCart = (id, qty) => async (dispatch, getState) =>{
    //destructure our data from axios request
    const { data } =  await axios.get(`/api/products/${id}`);

    //dispatch a type 
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { // in the reducer we are expecting an item
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        },
    });

    //once done with the dispatch, we want to save the cart into local storage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

//to remove from cart, here we dont need to do asyn func, we just only want to dispatch from this actions
//add getstate because when we remove items from cart we need to update the local state
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });

    //once the dispatch is complete, the cart items no longer will have the item we have removed
    //update localstorage
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};