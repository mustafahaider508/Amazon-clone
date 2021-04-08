import React, { useState } from 'react'
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';
import {auth} from "./firebase";
import "./LogIn.css"

function LogIn() {
 
    const history = useHistory();
    const[email,Setemail] = useState("");
    const[pass,Setpass] = useState("");


    const login = e =>{
        e.preventDefault();
        // Some Fancy Staff of FireBase....
        e.preventDefault();
        //DO Some fancy Staff of FireBase......
        auth.signInWithEmailAndPassword(email,pass)
        .then((auth) => {
            history.push('/')
            
        })
        .catch(error =>alert(error.message))

        
    }
    // const register = e =>{
    //     e.preventDefault();
    //     //DO Some fancy Staff of FireBase......
    //     auth.createUserWithEmailAndPassword(email,pass)
    //     .then((auth) => {
    //         history.push('/Signup')
            
    //     })
    //     .catch(error =>alert(error.message))

    // }

    return (
        <div className="login">
        <Link to="/">
        <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"/>
        </Link>

        <div className="login__form">
            <h1>Sign-In</h1>
            <form>
                <h5>Email or mobile phone number</h5>
                <input type="text" value={email} onChange={e =>Setemail(e.target.value)} />
                 <h5>Password</h5>
                 <input type="password" value={pass} onChange={e =>Setpass(e.target.value)} />
                 
                 <button className="login__signInbutton" type="submit" onClick={login}>Sign In</button>
            </form>
            <p>
                By Sign-in you agree to Amazon's Conditions of Use & Sale.
                Please see our Privacy notice, our Cookies notice and our
                Intrest-Based Ads Notice.
            </p>
            
        </div>
        <p>New to Amazon? </p>  
        <Link to="/Signup"> 
        <button className="login__registerbutton">Create Amazon account</button>
        </Link> 
        </div>
    )
}

export default LogIn 
