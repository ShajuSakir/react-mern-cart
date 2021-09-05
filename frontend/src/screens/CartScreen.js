import './CartScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
//component
import CartItem from '../components/CartItem';
//Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;  

    //this is to redispatch when changing the cart qty to update cart 
    const qtyChangeHandler = (id, qty) => {       
        dispatch(addToCart(id, qty));
    }

    const removeFromCartHandler = (id) => {        
        dispatch(removeFromCart(id));
    }

    const getCartCount = () =>{
        //The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    }

    return(
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                { cartItems.length === 0 ? (
                    <div>
                         Your cart is empty <Link to="/">Go Back</Link>
                    </div>
                ) : cartItems.map((item) => (
                    <CartItem 
                        key={item.product}
                        item={item} 
                        qtyChangeHandler={qtyChangeHandler}//{/*passing the reference of qtychangehandler to cart item */}
                        removeFromCartHandler={removeFromCartHandler}
                    /> 
                ))}               
            </div>
            <div className="cartscreen__right">
               <div className="cartscreen__info">
                   <p>Subtotal ({getCartCount()}) items</p>
                   <p>${getCartSubTotal().toFixed(2)}</p>                   
               </div>  
               <div>
                    <button>Proceed To Checkout</button>
               </div>             
            </div>
        </div>
    );
};

export default CartScreen;