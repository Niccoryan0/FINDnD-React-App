import React from 'react';
import logo from './logo.svg';
import './App.css';
import PartyMembers from './PartyMembers'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: []
    };
  }

  fetchApiStuff(){
    var signIn = {
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
      body: JSON.stringify(signIn )
      }
    ).then(res => res.json())
    .then(result => {
      if(result.jwt) {
        localStorage.setItem('token', result.jwt);
      }
    })
  }

  fetchPlayers(){

  }


   render(){
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           {/* <p>
             Edit <code>src/App.js</code> and save to reload.
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
           >
             Learn React
           </a> */}
         </header>
         <main>
           <PartyMembers players=></PartyMembers>
         </main>
       </div>
     );
   }
}

export default App;
