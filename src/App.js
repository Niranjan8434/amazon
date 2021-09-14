import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider";

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
    <Route path="/checkout">
       <Header />
      <Checkout />
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
