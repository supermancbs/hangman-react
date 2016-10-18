import React, { Component } from 'react';
import getRandomWord from '../../actions/getRandomWord'
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'


let NewGame = class extends Component  {

  handleClick() {
    this.props.dispatch(getRandomWord()).then((resp) => {
      browserHistory.push(`/GameBoard`)
    })
  }

  render(){
    return (
      <div>
        <input type="button" onClick={this.handleClick.bind(this)}value="New Game"/>
      </div>

    )
  }
}


NewGame = connect()(NewGame)



export default NewGame
