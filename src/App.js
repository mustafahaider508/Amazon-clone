import React from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import Home from './Home';
import './home.css';
import Checkout from "./Checkout";
import LogIn from "./LogIn";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {useEffect} from "react"
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import CreateAccount from './CreateAccount';
import firebase from "firebase";



function App() {
  const[{},dispatch] = useStateValue('');

  useEffect(() =>{
    //will only run once when the app component loads.....
    firebase.auth().onAuthStateChanged(authUser =>{
        console.log("the user is >>",authUser);

      if(authUser) {
        //the user is login /  the user were login

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is log out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
    <div className="App">
    
   
    <Switch>
    <Route exact path="/Signup">
      <CreateAccount />
   </Route>

    <Route exact path="/SignIn">
      <LogIn />
   </Route>

   <Route exact path="/checkout">
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
