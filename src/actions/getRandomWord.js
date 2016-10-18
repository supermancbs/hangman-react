import $ from 'jquery'

export default function getRandomWord(){
  const URL = "http://randomword.setgetgo.com/get.php"
  const request = $.ajax({
    type: "GET",
    url: URL,
    dataType: "jsonp",
    context: this,
  })
  return {
     type: 'GET_RANDOM_WORD',
     payload: request
   }

}
