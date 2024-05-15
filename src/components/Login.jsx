import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history("/");
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzJjqCqfztVkhnazZ1YjDwEnnPvlZIDTXXzpZDgGauw_Y7In1kFZJMkVE4dCRkKsVHls&usqp=CAU"
        />
      </Link>

      <div className="login__container">
        <h3>Subscribe to our newsletter🛒</h3>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Full name</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={register} className="login__registerButton">
            Subscribe
          </button>
        </form>

        <p>
          By subscribing you agree to be sent lattest news on our product and
          services. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
