import * as actionTypes from '../constants/cartConstants';

//it takes in a state = is an object has a field cartItems and set this cartItems as an array, also it takes in an action
export const cartReducer = (state = { cartItems: [] }, action) => {
    //now check the actions that despatched
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload; //payload has the item that we want to load
            //check if item already exists in the cart
            const existItem = state.cartItems.find((x)=> x.product === item.product);

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((x)=> x.product === existItem.product ? item : x), //set a new array , going through old array
                };
            } else{ //if the item was not found, it is the first time this item added into the cart, so add it
                return{
                    ...state,
                    cartItems : [...state.cartItems, item],
                };
            }

            case actionTypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter((x)=> x.product != action.payload), //take the state of cart items, and filter through it
                };
    
        default:
            return state;
    }
}