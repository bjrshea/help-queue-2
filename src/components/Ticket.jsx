import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket(props){
  return (
    <div>
      <style jsx>{`
          div {
            background-color: #000;
            color: white;
            font-family: sans-serif;
            border-radius: 20px;
            padding: 10px;
            margin-bottom: 5px;
          }
          .color-toggle {
            background-color: green;
          }
          .color-toggle:hover {
            background-color: pink;
          }
        `}</style>
      <h3 className="color-toggle">{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;
