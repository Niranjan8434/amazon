import React,{useState} from 'react';
import "./Login.css";
import {Link , useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
   const[email, setEmail] = useState("");
   const [ password, setPassword] = useState("");
  
   const signIn = e => {
       e.preventDefault();
       auth
       .signInWithEmailAndPassword(email, password)
       .then(auth => {
           history.push('/')
       })
       .catch(error => alert(error.message))
       // some fancy firebase login shittttt....
   }

   const register= e => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
       if(auth) {
           history.push('/')
       }
    })
    .catch(error => alert(error.message))

       // some fancy firebase register shitttt
   }

    return (
        <div className="login">
        <Link to="/">
            <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon.in logo" />
        </Link>
          
          <div  className="login_container">
              <h1>Sign-In</h1>
              <form>
                  <h5>E-mail</h5>
                  <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                  <h5>Password</h5>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                  <button type="submit" onClick={signIn} className="login_signInButton">Sing In</button>
              </form>

              <p>  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>

            <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
          </div>
        </div>
    )
}

export default Login;
