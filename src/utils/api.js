var axios = require('axios')

var id = 'YOUR_CLIENT_ID'
var sec = 'YOUR SECRET ID'
var params = '?client_id=' + id + '&client_secret=' + sec

function getProfile (username) {
  return axios.get('https://api.github.com/users/' + username + params)
    .then(function (user) {
      return user.data
    })
}

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}

function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0]
    var repos = data[1]

    return {
      profile,
      repos
    }
  })
}

function getStackOverflowProfile (userId) {
  return axios.get('https://api.stackexchange.com/2.2/users/' + userId + '?site=stackoverflow')
      .then(function (user) {
        return user.data.items[0]
      })
}

// function postPoll (data, successCallback) {
//   axios.post('https://script.google.com/macros/s/AKfycbxGdUTBV2kCi0Z0gfvo28QgDXy3IlIgqP75W6lVVVmZSgSof6i4/exec', data)
//   .then(function (response) {
//     successCallback(response)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })
// }

function postPoll (data, successCallback) {
  console.log(data, 'aca esta la data')
  fetch('https://script.google.com/macros/s/AKfycbxGdUTBV2kCi0Z0gfvo28QgDXy3IlIgqP75W6lVVVmZSgSof6i4/exec',
   {method: 'POST', body: data})
  .then(response => console.log('Success!', response))
  .catch(error => console.error('Error!', error.message))
}

module.exports = {
  getUserData: function () {
    return getUserData('valecarlos')
  },
  getStackOverflowProfile: function () {
    return getStackOverflowProfile('4224574')
  },
  postPoll
}
