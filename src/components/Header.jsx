import React from 'react';
import { Link } from 'react-router-dom';

function StyledHeader(){
  return (
    <div>
      <h1 className="header-styles">Help Queue </h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <style jsx>{`
        .header-styles {
          background-color: #ecf0f1;
          font-family: sans-serif;
          padding-top: 50px;
        }
      `}</style>
    </div>
  )
}

export default StyledHeader;
