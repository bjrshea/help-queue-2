import React from "react";
import Ticket from "./Ticket";

function TicketList(){
  const listStyle = {
    backgroundColor: 'red',
    padding: "5px"

  }
  return (
    <div style={listStyle}>
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record"
    />
    <Ticket
      location="2A"
      names="Fo and Het"
      issue="Firebase will not."
    />
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record"
    />
    <Ticket
      location="2A"
      names="Fo and Het"
      issue="Firebase will not."
    />
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record"
    />
    <Ticket
      location="2A"
      names="Fo and Het"
      issue="Firebase will not."
    />
    </div>
  );
}

export default TicketList;
