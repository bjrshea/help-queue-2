import React from 'react'
import StyledHeader from './Header'
import TicketList from './TicketList'
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';

function App(){
  return (
    <div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }
        `}</style>
      <StyledHeader/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
      </Switch>
    </div>
  )
}

export default App
