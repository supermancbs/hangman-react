export default function takeGuess(letter){
  return {
   type: 'TAKE_GUESS',
   payload: letter
 }
}
