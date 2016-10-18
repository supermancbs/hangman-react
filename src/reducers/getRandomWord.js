const GetRandomWord = (state = {word: ""}, action) => {
  switch(action.type){
    case "GET_RANDOM_WORD":
      return Object.assign({}, state, {word: action.payload.Word})
    default:
      return state
  }
}


export default GetRandomWord
