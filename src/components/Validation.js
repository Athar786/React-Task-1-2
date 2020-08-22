import React from 'react';

function validation(props)
 {
   const short = {
     'background-color': 'green',
     'color': 'white',
     'display': 'inline',
     'border':'1px solid black',
     'text-align': 'center'
   };
   const long = {
     'background-color': 'red',
     'color': 'white',
     'display': 'inline',
     'border':'1px solid black',
     'text-align': 'center'
   };
  return (
    <div>
      {props.textLength >= 5 ? <p style={long}>Text long enough!</p>
      : <p style={short}>Text Too short!</p>}
    </div>
  )
}

export default validation
