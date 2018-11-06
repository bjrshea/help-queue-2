import React from 'react'
// import PropTypes from 'prop-types'

function StyledHeader(){
  // const styledHeaderStyles = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
  // }

  return (
    // <h1 style={styledHeaderStyles}>Help Queue</h1>
    <div>
      <h1 className="header-styles">Help Queue </h1>
      <style jsx>{`
        .header-styles {
          backgroundColor: #ecf0f1;
          fontFamily: sans-serif;
          paddingTop: 50px;
        }
      `}</style>
    </div>
  )
}

export default StyledHeader;
