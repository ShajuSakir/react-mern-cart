import './ProductScreen.css';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

//Actions
import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import Product from '../components/Product';

//get match and history as props
const ProductScreen = ({match, history}) => {

    //define a state for qty from product view screen
    const [qty, setQty] = useState(1);
    //create a dispatch
    const dispatch = useDispatch();

    //extract our state, takes in state and return whatever we want from that state
    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    //By using this Hook useEffect , you tell React that your component needs to do something after render
    
    useEffect(()=> {
        if(product && match.params.id !== product._id) {//match.params gives the url param eg : http://localhost:3000/product/61208839291ad6bcc066e36c..... this id is not equal to the product in state , then dispatch an action
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch,product, match]);


    const addToCartHandler = () =>{
        //dispatch addtocart to reducer
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }

    return(
        <div className="productscreen">
            {loading? <h2>Loading...</h2>: error ? <h2>{error}</h2>: (
                <> {/* this is a fragment */}
            <div className="productscreen__left">
                <div className="left__image">
                    <img src={product.imageUrl} alt={product.name}/>
                </div>

                <div className="left__info">
                    <p className="left_name">{product.name}</p>
                    <p>Price : ${product.price}</p>
                    <p>Description: {product.desccription}</p>
                </div>
           </div>           

            <div className="productscreen__right">
               <div className="right__info">
                   <p>
                       Price: <span>${product.price}</span>
                   </p>
                   <p>
                       Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span>
                   </p>
                   <p>
                       Qty
                       <select value={qty} onChange={(e)=>setQty(e.target.value)}>
                          {/*create an array, make an array with size - countInStock .. then take keys of this array and map*/}
                          {[...Array(product.countInStock).keys()].map((x)=> (
                              <option key={x+1} value={x+1}>
                                  {x+1}
                              </option>
                          ))}
                       </select>
                   </p>
                   <p>
                       <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                   </p>
               </div>
           </div>
                </>
            )}           
        </div>
    );
};

export default ProductScreen;