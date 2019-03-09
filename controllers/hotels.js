var fs = require('fs')

exports.retrieveHotels = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile(AppRoot + '/config/' + 'hotels.json', 'utf8', function (err, data) {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  }).catch(function (err) {
    console.log(err)
  })
}
