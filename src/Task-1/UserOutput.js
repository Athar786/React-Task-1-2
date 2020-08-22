import React from 'react';
import './UserOutput.css';
function userOutput(props) {
    return (
        <div class="UserOutput">
        <p>My Name is : {props.name}</p>
        <p>I m 22 Years Old</p>
    </div>

    )
    
}

export default userOutput;