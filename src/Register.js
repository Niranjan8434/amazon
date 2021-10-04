import React,{useState} from 'react';
import "./Register.css";
import {Link , useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Register() {
    const history = useHistory();
    const [name, setName]= useState("");
   const[email, setEmail] = useState("");
   const [ password, setPassword] = useState("");

   const register= e => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .catch(error => alert(error.message))

       // some fancy firebase register shitttt
       history.push("/")
   }

    return (
        <div className="register">
        <Link to="/">
            <img className="register_logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon.in logo" />
        </Link>
          
          <div  className="register_container">
              <h1>Create account</h1>
              <form >
                  <h5>Your Name</h5>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} require/>

                  <h5>E-mail</h5>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} autocomplete="off" required/>

                  <h5>Password</h5>
                  <input type="password" value={password} placeholder="At least 6 characters"onChange={e => setPassword(e.target.value)} autocomplete="off" required/>

                  <button type="submit" onClick={register} className="register-button">Continue</button>                   
              </form>
              

              <p>  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>

              <p className="register-signIn">Already have an account <Link to="/login">Sign in</Link></p>

            
          </div>
        </div>
    )
}

export default Register
