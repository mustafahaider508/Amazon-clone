import React,{ useState } from 'react';
import {useHistory} from "react-router-dom";
import "./CreateAccount.css";
import {auth} from "./firebase";
import { Link } from 'react-router-dom';

function CreateAccount() {


    const history = useHistory();
    const[email,Setemail] = useState("");
    const[pass,Setpass] = useState("");


    // const Signup = e =>{
    //     e.preventDefault();
    //     // Some Fancy Staff of FireBase....
    //     e.preventDefault();
    //     //DO Some fancy Staff of FireBase......
    //     auth.signInWithEmailAndPassword(email,pass)
    //     .then((auth) => {
    //         history.push('/')
    //     })
    //     .catch(error =>alert(error.message))        
    // }

     const register = e =>{
        e.preventDefault();
        //DO Some fancy Staff of FireBase......
        auth.createUserWithEmailAndPassword(email,pass)
        .then((auth) => {
            history.push('/SignIn');
            alert("Your Account has Successfully Created");
            
        })
        .catch(error =>alert(error.message))

    }

    return (
        <div className="Signup">
         <Link to="/">
        <img className="Signup__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"/>
        </Link>

        <div className="Signup__form">
        <h1>Create account</h1>
        <form>
                <h5>Your name</h5>
                <input type="text"  />
                <h5>Email </h5>
                <input type="text"   value={email} onChange={e =>Setemail(e.target.value)}/>
                 <h5>Password</h5>
                 <input type="password" value={pass} onChange={e =>Setpass(e.target.value)} />
                 <h5>Re-enter-Password</h5>
                 <input type="password" value={pass} onChange={e =>Setpass(e.target.value)} />
                 
                 <button className="login__signInbutton" type="submit" onClick={register}>Create your Amazone account</button>
            </form>
            <p>
            By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>

            <h6>
            Already have an account? <Link to="SignIn">Sign-In</Link>
            </h6>

        </div>
            
        </div>
    )
}

export default CreateAccount
