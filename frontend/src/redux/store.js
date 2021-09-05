import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducers';

//create reducers and add state
const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});

//middleware, we only have one middleware and we add thunk(middleware) in it, it helps us to make async request in our actions
const middleware = [thunk];

//setinitialstate- this is to persiste cart when reloading the page
const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const INITIAL_STATE = {
    cart:{
        cartItems : cartFromLocalStorage
    }
}

//create store, pass reducer, enhancer (composewithdevtool)(this will give access all store ,action ect in redux browser dev tool) 
//and apply middleware inside and expand middleware
const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);  

export default store;