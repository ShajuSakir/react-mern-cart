//rafce short form to create tempate

import './Navbar.css';
import {Link} from 'react-router-dom';
import {useSelector, useStore} from 'react-redux';

//destructure the click event from app.js
const Navbar = ({click})=>{

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty) , 0);
    }


    return(
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            {/* Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        {/* icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>                        
                    </Link>
                </li>
                <li>
                    <Link to="/">
                       Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;