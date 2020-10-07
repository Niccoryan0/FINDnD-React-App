import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

export default class PartyMember extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    };
  }

  render(){
      const pstyles = {
        color: "red",
      }
      const imgstyles = {
        height: "300px",
        borderRadius: "50%"
      }
      return (
        // <div>
        //   <img class="member-image" src="{props.ImageUrl}"></img>
        //   <h2>{props.CharacterName}</h2>
        //   <p>{props.Class}</p>
        //   <p>{props.Race}</p>
        //   <p>{props.ExperienceLevel}</p>
        //   <p>{props.UserEmail}</p>
        // </div>
        <CardDeck>
          {this.state.players.map(function(player){
            return (<Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="{player.ImageUrl}" />
              <Card.Body>
                <Card.Title>{player.CharacterName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Class: {player.Class}</ListGroupItem>
                <ListGroupItem>Race: {player.Race}</ListGroupItem>
                <ListGroupItem>Experience Level: {player.ExperienceLevel}</ListGroupItem>
                <ListGroupItem>Email: {player.UserEmail}</ListGroupItem>
              </ListGroup>
            </Card>)
          })}
        </CardDeck>
      )
  }
}