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
      const imgStyles = {
        height: "200px",
        maxWidth:"16rem",
        borderRadius: "50%",
        margin: "15px auto"
      }
      const cardDeckStyles = {
        display: 'flex', 
        flexDirection: 'row',
        flexWrap: "wrap", 
        padding: "5px", 
        margin: "0px 40px 0 40px", 
        justifyContent: "center"
      }
      const cardStyles = {
        width: '300px', 
        margin:"5px 5px 40px 5px", 
        flex: "none", 
        backgroundColor: "#e3e3e3"
      }
      const listItemStyles = {
        backgroundColor: "#e3e3e3", 
        color: "#9D0A0E"
      }
      return (
        <CardDeck style={cardDeckStyles} >
          {this.props.players.map(function(player){
            return (<Card border="dark" style={cardStyles} key={player.userEmail + player.characterName}>
              <Card.Img variant="top" src={player.imageUrl} style={imgStyles} />
              <Card.Body>
                <Card.Title style={{color: "#9D0A0E"}}>{player.characterName}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush" style={{ backgroundColor: "#e3e3e3" }}>
                <ListGroupItem style={listItemStyles}>Class: {player.class}</ListGroupItem>
                <ListGroupItem style={listItemStyles}>Race: {player.race}</ListGroupItem>
                <ListGroupItem style={listItemStyles}>Experience Level: {player.experienceLevel}</ListGroupItem>
                <ListGroupItem style={listItemStyles}>{player.userEmail || "generic@gmail.com"}</ListGroupItem>
              </ListGroup>
            </Card>)
          })}
        </CardDeck>
      )
  }
}