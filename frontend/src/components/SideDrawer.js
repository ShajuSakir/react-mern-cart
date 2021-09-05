import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ({show, click}) =>{
    //create style dynamically
    const sideDrawerClass= ["sidedrawer"];

    if(show){
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty,item) => qty + Number(item.qty) , 0);
    }

    //join with add the items array with space
    return   <div className={sideDrawerClass.join(" ")}>
        {/* passing onclick listener , anything that click inside of the ul will close the sidedrawer */}
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidedrawer__cartbadge">{getCartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>

    </div>;
}

export default SideDrawer;