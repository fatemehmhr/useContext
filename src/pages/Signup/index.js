import React, { useState, useEffect } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function signup() {
   

    if (localStorage.getItem("username") === username) {
      alert("Username isn't available!");
    } else {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      alert("Signup Done!");
    }
  }

  return (
    <div className='col col-left'>
      <h2>Signup page</h2>
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

        <button type='button' className='button' onClick={signup}>
          Signup
        </button>

        <a href='http://localhost:3000/login' className='button'>
          Login here!
        </a>
      </form>
    </div>
  );
}
