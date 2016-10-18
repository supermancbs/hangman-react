import React, { Component } from 'react';
import NewGame from './NewGame'
import GameBoard from './GameBoard'

let Game = class extends Component  {
    render(){
      return (
        <div>
          <NewGame/>
          <GameBoard/>
        </div>

      )
    }
}

export default Game
