const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/location', function (req, res) {
  res.render('location')
})

app.listen(80, function () {
  console.log('App listening on port 80!')
})
