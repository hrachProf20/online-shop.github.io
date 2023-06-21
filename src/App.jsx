import './App.css';
import Header from "./common/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import {useState} from "react";
import Cart from "./common/cart/cart";
import Sdata from "./components/shop/Sdata";
import Footer from "./common/footer/Footer";
import User from "./common/header/Menu/User";
import Navbar from "./common/header/Navbar";
import SignIn from "./components/SignIn/Sign-in";
import SignUp from "./components/SignUp/SignUp";


const App = () => {
    // stpe 1:fetch data from database
   const {productItems} = Data;
    const {ShopItems} = Sdata;

    const [cartItem,setCartItem] = useState([])

    const addToCart = (product) => {
       const productExit = cartItem.find((item) => item.id === product.id)
        if (productExit){
            setCartItem(cartItem.map((item) =>
                (item.id === product.id ?
                    {... productExit,qty:productExit.qty + 1} : item)))
        }
        else{
             setCartItem([... cartItem, {...product, qty: 1} ])
        }
    }

        const decreaseQty = (product) => {
        const productExit = cartItem.find((item) => item.id === product.id)
        if(productExit.qty === 1) {
            setCartItem(cartItem.filter((item) => item.id !== product.id))
        } else {
            setCartItem(cartItem.map((item) =>  (item.id === product.id ? {... productExit, qty:productExit.qty-1}:item)))
        }
    }


  return(
      <div>
          <Router>
              <Header cartItem = {cartItem}  />

              <Route path="/" exact>
                  <Pages productItems = {productItems} addToCart={addToCart} ShopItems={ShopItems}/>
              </Route>

              <Route path="/cart" exact>
                  <Cart cartItem = {cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
              </Route>
              <Route path='/user'>
                  <User />
              </Route>

              <Route path="/signIn">
                  <SignIn/>
              </Route>
              <Route path='/signUp'>
                  <SignUp/>
              </Route>

              <Footer/>
          </Router>

      </div>

  )
}
export default App