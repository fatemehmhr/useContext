import React, { useState } from "react";
import "./Login.scss";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const LUsername = localStorage.getItem("username");
    const LPassword = localStorage.getItem("password");

    if (LUsername === username && LPassword === password) {
      alert("You logged in!");
      document.getElementById("login").style.color = "#00ff00";
    } else alert("username or password is incorrect!");
  }

  return (
    <div className='col col-left'>
      <h2>Login page</h2>
      <form action=''>
        <div>
          <label htmlFor='username' className='login-label'>
            Username:
          </label>
          <input
            className='login-input'
            type='text'
            placeholder='Enter Username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor='password' className='login-label'>
            Password:
          </label>
          <input
            className='login-input'
            type='text'
            placeholder='Enter Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='button' className='button' onClick={login}>
          Login
        </button>
        <a href='http://localhost:3000/signup' className='button'>
          Signup here!
        </a>
      </form>
    </div>
  );
}
