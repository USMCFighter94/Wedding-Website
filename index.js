const express = require('express')
const app = express()
const path = require('path')

var readFile = require('./controllers/readFile.js')
var submit = require('./controllers/submit.js')
global.AppRoot = path.resolve(__dirname)

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  var party = readFile.retrieveJson('wedding-party.json')
  var images = readFile.retrieveJson('front-page-images.json')

  Promise.all([party, images]).then(function (values) {
    res.render('index', {
      data: values[0],
      images: values[1]
    })
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
  var hotels = readFile.retrieveJson('hotels.json')
  var images = readFile.retrieveJson('hotel-images.json')

  Promise.all([hotels, images]).then(function (values) {
    res.render('accommodations', {
      title: 'Accommodations',
      data: values[0],
      images: values[1]
    })
  })
})

app.get('/rsvp', function (req, res) {
  res.render('rsvp', { title: 'RSVP' })
})

app.post('/submit', submit.handleSubmission)

app.get('/registry', function (req, res) {
  res.render('registry', { title: 'Registry' })
})

app.get('/location', function (req, res) {
  res.render('location', { title: 'Location' })
})

app.get('/finished', function (req, res) {
  res.render('finished', { title: 'Finished' })
})

app.listen(80, function () {
  console.log('App listening on port 80!')
})
