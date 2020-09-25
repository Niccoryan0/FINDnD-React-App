import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var newobj = {
    username : "Espresso401",
    password : "@Test123!"
  }
  fetch("https://localhost:44335/api/Account/Login", {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "*"
    },
    body: JSON.stringify(newobj)
    }
  ).then(res => res.json())
   .then(result => {
     console.log(result);
     if(result.Status === 'Success') localStorage.setItem('token', result.jwt)
   })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
