const Guess = (state = {guessedLetters: []}, action) => {
  switch(action.type){
    case 'TAKE_GUESS':
      return Object.assign({}, state, {
        guessedWords: [...state.guessedLetters, {guessedLetters: action.payload}]
      })
    default:
      return state
  }
}


export default Guess
