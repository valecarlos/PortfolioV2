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

module.exports = {
  getUserData: function () {
    return getUserData('valecarlos')
  },
  getStackOverflowProfile: function () {
    return getStackOverflowProfile('4224574')
  }
}
