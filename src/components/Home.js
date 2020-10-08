import React from "react";
import PartyMembers from './PartyMembers'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      players : []
    }
  }

  async fetchPlayers(){
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

  componentDidMount() {
    this.fetchPlayers();
  };


  render(){  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the FINDnD Website</h1>
        </header>
        <main>
          <h2 style={{margin: "20px 0 20px 0"}}>Party Members</h2>
          <hr />
          <PartyMembers players={this.state.players}></PartyMembers>
        </main>
      </div>
    );
  }
}