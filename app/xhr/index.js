import axios from 'axios'

let getComments = function() {
  return axios.get('http://chilid.hypotheticalpeople.com/api/comments_list.php')
}

let getCommentsAdd = function(text) {
  return axios.get('http://chilid.hypotheticalpeople.com/api/comments_add.php?text=' + text)
}

let getCounter = function() {
  return axios.get('http://chilid.hypotheticalpeople.com/api/counter_list.php')
}

let getCounterUpdate = function(system, method) {
  return axios.get('http://chilid.hypotheticalpeople.com/api/counter_update.php?system=' + system + '&method=' + method)
}

export { getComments, getCommentsAdd, getCounter, getCounterUpdate }
