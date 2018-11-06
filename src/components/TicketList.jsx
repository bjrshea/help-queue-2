import React from 'react'
import Ticket from './Ticket'

const masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3a',
    issue: 'firebase will not do something',
  },
  {
    names: 'Sleater and Kinney',
    location: '4b',
    issue: 'webpack is a pain'
  },
  {
    names: 'Imani and Jacob',
    location: '8c',
    issue: 'atom is too colorful'
  }
]

function TicketList(){
  // const listStyle = {
  //   backgroundColor: 'red',
  //   padding: '5px'

  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  )
}

export default TicketList
