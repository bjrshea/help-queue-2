import React from 'react';

function StyledHeader(){
  return (
    <div>
      <h1 className="header-styles">Help Queue </h1>
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
