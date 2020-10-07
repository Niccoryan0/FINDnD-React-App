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

  async fetchApiStuff(){
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
      body: JSON.stringify(signIn)
      }
    ).then(res => res.json())
    .then(result => {
      if(result.jwt) {
        localStorage.setItem('token', result.jwt);
        this.setState((state) => {
          return {userId : result.userid}
        });
      }
      this.fetchPlayers()
    })
  }

  fetchPlayers(){
    fetch("https://espresso401api.azurewebsites.net/api/DungeonMasters/UserId/" + this.state.userId, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Authorization': "Bearer " + localStorage.getItem('token')
      }
      }
    ).then(res => {
      return res.json()
    })
    .then(result => {
      if(result){
        this.setState((state) => {
          return {players : result.party.playersInParty}
        })
      }
    });
  }
    // componentDidMount() {
    //   this.fetchApiStuff();
    //   this.fetchPlayers();
    // };


   render(){
    this.fetchApiStuff();

     return (
       <div className="App">
         <header className="App-header">
           <h1>Welcome to the FINDnD Website</h1>
         </header>
         <main>
           <PartyMembers players={this.state.players}></PartyMembers>
         </main>
       </div>
     );
   }
}
