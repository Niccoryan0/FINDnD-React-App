import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
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
        localStorage.setItem('id', result.userid);
      }
    })
  }

  // async fetchPlayers(){
  //   fetch("https://espresso401api.azurewebsites.net/api/DungeonMasters/UserId/" + this.state.userId, {
  //     method: "GET",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': "*",
  //       'Authorization': "Bearer " + localStorage.getItem('token')
  //     }
  //     }
  //   ).then(res => {
  //     return res.json()
  //   })
  //   .then(result => {
  //     if(result){
  //       this.setState((state) => {
  //         return {players : result.party.playersInParty}
  //       })
  //     }
  //   });
  // }

  componentDidMount() {
    this.fetchApiStuff();
    // this.fetchPlayers();
  };

  render(){  
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <h1>Welcome to the FINDnD Website</h1>
      //   </header>
      //   <main>
      //     <h2 style={{margin: "20px 0 20px 0"}}>Party Members</h2>
      //     <hr />
      //     <PartyMembers players={this.state.players}></PartyMembers>
      //   </main>
      // </div>
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route component={Error}/>
          </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
