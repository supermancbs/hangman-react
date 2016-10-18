import React from 'react';

const TakeGuess = ( {handleSubmit} ) => {

  return (
    <div>
      <form onSubmit={handleSubmit(this)}>
        <input type="text"/>
        <input type="submit" value="Take Guess"/>
      </form>
    </div>

  )
}

export default TakeGuess
