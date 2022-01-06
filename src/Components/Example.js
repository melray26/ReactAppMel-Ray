import React from 'react';

function Example(props) {
  console.log(props);
  return (
    <div className="Example">
      <h3>Let's Begin the Game</h3>
      <button onClick={() => {
        // little () lance talked about calls function at props.cw so then the counsle --> be present the button that starts the game in the beginning remove all the excess
        props.cw()
      }}>Let's Start!</button>
    
    </div>
    
  );
}

export default Example;
