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
        height: "200px",
        maxWidth:"200px",
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
          {this.props.players.map(function(player){
            console.log(player);

            return (<Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={player.imageUrl} style={imgstyles} />
              <Card.Body>
                <Card.Title>{player.characterName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Class: {player.class}</ListGroupItem>
                <ListGroupItem>Race: {player.race}</ListGroupItem>
                <ListGroupItem>Experience Level: {player.experienceLevel}</ListGroupItem>
                <ListGroupItem>Email: {player.userEmail}</ListGroupItem>
              </ListGroup>
            </Card>)
          })}
        </CardDeck>
      )
  }
}