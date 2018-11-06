import React from 'react'
import StyledHeader from './Header'
import TicketList from './TicketList'

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
      <TicketList/>
    </div>
  )
}

export default App
