import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider";
import {loadStripe } from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise =loadStripe('pk_test_51JeHwSSAtHB8be8L1KBuIveAItogJW2xkvUHCwgZdi4AZp1F7DZzNyIn9oclsC2CpMZqmWJPP2l3sCq16V7imtgW00ooq1ZTHJ');

function App() {
  const [{ },dispatch] = useStateValue();

  useEffect(() => {
    //wil only run once when the app components loads....
    auth.onAuthStateChanged(authUser => {
      console.log('the User is >>>>',authUser);
      if(authUser){
      // the user just logged in/ the user was logged in
         dispatch({
           type: 'SET_USER',
           user: authUser
         })
      }else{
        //the uer is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
   

    <Switch>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/register">
    <Register />
    </Route>
    <Route path="/checkout">
       <Header />
      <Checkout />
    </Route>
    <Route path="/orders">
       <Header />
      <Orders />
    </Route>
    <Route path="/payment">
    <Header />
    <Elements stripe={promise}>
    <Payment />
    </Elements>  
    </Route>
    <Route path="/">
    <Header />
    <Home />
    </Route>

    </Switch>
  
    </div>
    </Router>
  );
}

export default App;
