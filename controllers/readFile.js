var fs = require('fs')

exports.retrieveJson = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(AppRoot + '/config/' + fileName, 'utf8', function (err, data) {
      if (err) return reject(err)
      resolve(JSON.parse(data))
    })
  }).catch(function (err) {
    console.log(err)
  })
}
