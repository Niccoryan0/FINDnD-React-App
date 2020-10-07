import React from 'react';
import logo from './logo.svg';
import './App.css';
import PartyMembers from './PartyMembers'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      players: [],
      userId: ""
    };
  }

  fetchApiStuff(){
    var signIn = {
      username : "Espresso401",
      password : "@Test123!"
    }
    fetch("https://espresso401api.azurewebsites.net/api/Account/Login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      body: JSON.stringify(signIn )
      }
    ).then(res => res.json())
    .then(result => {
      console.log(result);
      if(result.jwt) {
        localStorage.setItem('token', result.jwt);
        this.setState((state) => {
          return {userId : result.userid}
        });
      }
    })
  }

  fetchPlayers(){
    console.log("hi");
    fetch("https://espresso401api.azurewebsites.net/api/DungeonMasters/UserId/" + this.state.userId, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },
      Authorization: "Bearer" + localStorage.getItem('token')
      }
    ).then(res => {
      console.log(res);
      res.json()
    })
    .then(result => {
      if(result){
        console.log(result);
        this.setState((state) => {
          return {players : result.Party.PlayersInParty}
        })
        //this.state.players = result.Party.PlayersInParty;
      }
    });
  }


   render(){

     return (
       <div className="App">
         {/* <header className="App-header">
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
         </header> */}
         <main>
           <PartyMembers players={this.state.players}></PartyMembers>
         </main>
       </div>
     );
   }
}
