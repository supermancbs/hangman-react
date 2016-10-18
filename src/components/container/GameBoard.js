import React, { Component } from 'react';
import TotalGuess from '../presentational/TotalGuess'
import TakeGuess from '../presentational/TakeGuess'
import { connect } from 'react-redux'

let GameBoard = class extends Component  {
  render(){


    return (
      <div>
      <TotalGuess count={this.props.guessCount} />
      <TakeGuess/>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    guessCount: state.guessCount
  }
}

const SmartGameBoard = connect(mapStateToProps)(GameBoard)

export default SmartGameBoard
