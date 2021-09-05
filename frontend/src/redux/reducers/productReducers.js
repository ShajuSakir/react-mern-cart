import * as actionTypes from '../constants/productConstants';

//get all of the products
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        //when do the request, set the loadinng to true
        case actionTypes.GET_PRODUCTS_REQUEST:
            return{
                loading: true,
                products: []
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.payload
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }; 
        default:
            return state;
    }
};

//to get individual product when click on view
export const getProductDetailsReducer = (state = { product: {} }, action) =>{
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return{
                loading: true,
            };
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{
                loading: false,
                product: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            };
        case actionTypes.GET_PRODUCT_DETAILS_RESET:
            return{
                product: {}
            }; 
        default:
            return state;
    }
};