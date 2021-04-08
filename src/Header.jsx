import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import firebase from "firebase";
import {Grid} from "@material-ui/core";

export default function Header() {
    
  const [{basket,user},dispatch] = useStateValue();

  const SignInAuthentication = () =>{
    if(user) {
      firebase.auth().signOut();
    }
  }

    return (
      <>
     
      <div className="header">
        <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>
        

        <div className="header__search">
         <input className="header__searchInput" type="text" />
         <SearchIcon  className="header__searchIcon"/>
        </div>

        <div className="header__nav">
      
        <Link to={!user && './SignIn'}>
         <div onClick={SignInAuthentication} 
          className="header__option">
          <span className="header_optionLineOne">Hello, {user?.email}</span>
          <span className="header_optionLineTwo">{user ? "SignOut" : "SignIn"}</span>
         </div>
         </Link>

         <div className="header__option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
         </div>

         <div className="header__option">
          <span className="header_optionLineOne">Your's</span>
          <span className="header_optionLineTwo">Prime</span>
         </div>
         

         <Link to="/checkout">
         <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo haeder__basketCount">{basket?.length}</span>
         </div>
         </Link>
        </div>   
        </div>
       
        </>
    )
}

