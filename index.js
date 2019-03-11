const express = require('express')
const app = express()
const path = require('path')

var readFile = require('./controllers/readFile.js')
global.AppRoot = path.resolve(__dirname)

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  readFile.retrieveJson('wedding-party.json').then(function (party) {
    res.render('index', { data: party })
  })
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

app.get('/accommodations', function (req, res) {
  readFile.retrieveJson('hotels.json').then(function (hotels) {
    res.render('accommodations', {
      title: 'Accommodations',
      data: hotels
    })
  })
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
