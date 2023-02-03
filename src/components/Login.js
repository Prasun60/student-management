import React from 'react'
import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"
import { useDispatch } from "react-redux";
import { setLogin } from "../state";


import "../styles/login.scss";


function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
  

    const navitage = useNavigate();

    
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        // dispatch({type:"LOGIN", payload:user})

        dispatch(setLogin({ islogin: true }));

        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <span>Wrong email or password!</span>}
    </form>
  </div>
  )
}

export default Login