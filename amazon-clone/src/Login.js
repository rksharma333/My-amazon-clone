import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    
    auth
       .signInWithEmailAndPassword(email,password)
       .then((auth) => {
           navigate('/')
       })
       .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        
        if(auth){
          navigate('/')
        }
      })
      .catch(error => alert(error.message));

    //do some firebase register shittttttttt......
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE made BY{" "}
            <strong>Rahul Kumar</strong> Conditions of Use & Sale. Please see
            our privacy Notice, our Cookies Notice and our Interest-Based Ads
            Notice.
          </p>

          <button onClick={register} className="login__registerButton">
            Create Your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
