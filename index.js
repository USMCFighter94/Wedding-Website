const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/ceremony', function (req, res) {
  res.render('ceremony', { title: 'Ceremony' })
})

app.get('/reception', function (req, res) {
  res.render('reception', { title: 'Reception' })
})

app.get('/information', function (req, res) {
  res.render('information', { title: 'Information' })
})

app.get('/accomadations', function (req, res) {
  res.render('accomadations', { title: 'Accomadations' })
})

app.get('/rsvp', function (req, res) {
  res.render('rsvp', { title: 'RSVP' })
})

app.get('/registry', function (req, res) {
  res.render('registry', { title: 'Registry' })
})

app.get('/location', function (req, res) {
  res.render('location', { title: 'Location' })
})

app.listen(80, function () {
  console.log('App listening on port 80!')
})
