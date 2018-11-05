import React from "react";

function StyledHeader(props){
  const styledHeaderStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }

  return (
    <h1 style={styledHeaderStyles}>Help Queue</h1>
  );

}
export default StyledHeader;
