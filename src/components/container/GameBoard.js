import React, { Component } from 'react';
import TotalGuess from '../presentational/TotalGuess'
import TakeGuess from '../presentational/TakeGuess'
import addGuess from '../../actions/addGuess'
import { connect } from 'react-redux'

let GameBoard = class extends Component  {

  handleOnSubmit(letter){
      debugger
    this.props.dispatch(addGuess(letter))
  }

  render(){
    return (
      <div>
        <TotalGuess count={this.props.guessCount} />
        <TakeGuess handleSubmit={this.handleOnSubmit.bind(this)}/>
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
