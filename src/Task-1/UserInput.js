import React from 'react';

function userInput(props) {
    const styleInput = {
      width: "100%",
      border: "5px solid black",
      padding: "10px",
      margin: "10px",
    };
  
  
    const styleDiv = { "text-align": "center" };
   
    return (
      <div style={styleDiv}>
        <input
          type="text"
          style={styleInput}
          onChange={props.changed}
          value={props.currentName}
        />

</div>
  
  );
  }

export default userInput;