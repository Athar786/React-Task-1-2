import React from "react";
function char(props) {
  const char = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
    
  };

  return (
    <div style={char}  onClick={props.handleClick}>
      {props.character}
    </div>
  )
}

export default char;