const GuessCounter = (state = 5, action) => {
  switch(action.type){
    case 'RESTART_COUNTER':
      return 5
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}


export default GuessCounter
