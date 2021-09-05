import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Componenets
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

function App() {

  //side drawer logic- everytime click on the backdrop it should close,when click on the navbar icon it shoulld open

  const [sideToggle, setSideToggle] = useState(false);


  return (
    <Router>   
      {/* passing a click event to navbar */}  
     <Navbar click={()=> setSideToggle(true)}/>
     {/* Sidedrawer - only for mobile */}
     <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>  
     {/* pass click event to set the state to false, this is to sline in sidedrwaer when click onto backdrop */}   
     <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>

     {/* Place our routing screens here */}
     <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
     </main>     
     </Router>
  );
}

export default App;
