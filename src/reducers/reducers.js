import { combineReducers } from 'redux'
import  getRandomWord  from './getRandomWord'
import  guessLetter  from './guesses'
import  guessCount  from './guessCount'

const rootReducer = combineReducers({
  getRandomWord,
  guessLetter,
  guessCount
})

export default rootReducer;
