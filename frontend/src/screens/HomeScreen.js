import './HomeScreen.css';
import { useEffect, useReducer } from 'react';
import {useSelector, useDispatch} from 'react-redux'; //import 2 hooks from redux

//Componenets
import Product from '../components/Product';

//Actions
import {getProducts as listProducts} from '../redux/actions/productActions';

const HomeScreen = () => {

    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts); //this takes a func that return a state

    //destructure from the getproduct
    const { products, loading, error } = getProducts;

    //everytime when the page load, we want to make a dispatch to list the products, and add dispatch as a dependency to the useeffect
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]);

    return(
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>

            <div className="homescreen__products">
               {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) :(
                   products.map(product => (<Product 
                    key={product._id} 
                    productId={product._id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    imageUrl={product.imageUrl}
                    />)
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;