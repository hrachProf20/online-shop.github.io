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
import Users from "./common/header/Menu/Users";
import SignIn from "./components/SignIn/Sign-in";
import SignUp from "./components/SignUp/SignUp";
import Details from "./components/SignIn/Details";


import { render } from 'react-dom';
import React from "react";
import {connect, useDispatch, useSelector,} from "react-redux";



const App = () => {
  const name =  useSelector(function (state){
    const dispach = useDispatch();
    if(SignIn === SignUp) {
        console.log('havasar')
    }

    })
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
                  <Users/>
              </Route>
              <Route path='/signUp'>
                  <SignUp/>
              </Route>
              {/*<Route>*/}
              {/*    <Details/>*/}
              {/*</Route>*/}
              <Footer/>
          </Router>

          <h1>
              {name}
          </h1>
      </div>

  )
}
export default App




// import {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment, incrementByAmount} from "./counter/counterSlice";
//
// const App = () => {
//     const {count} = useSelector((state => state.counter))
//     const dispech = useDispatch()
//     return(
//         <div>
//             <button onClick={() => dispech(increment())}>plus</button>
//             <p>{count}</p>
//             <button onClick={() =>  dispech(decrement())}>minus</button>
//             <br/>
//             <button onClick={() =>  dispech(incrementByAmount())}>32</button>
//         </div>
//     )
// }
//
// export default App