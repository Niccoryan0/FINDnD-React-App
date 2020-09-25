import React from "react";

function PartyMember(props){
  return (
    <div>
      <img class="member-image" src="{props.ImageUrl}"></img>
      <h2>{props.CharacterName}</h2>
      <p>{props.Class}</p>
      <p>{props.Race}</p>
      <p>{props.ExperienceLevel}</p>
      <p>{props.UserEmail}</p>
    </div>
  )
}


export default PartyMember;