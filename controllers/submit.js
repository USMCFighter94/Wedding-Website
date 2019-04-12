var firebase = require("firebase/app");
require("firebase/database");

var db = require('./db.js');
var config = db.firebaseConfig;

firebase.initializeApp(config);

const handleSubmission = (request, response) => {
  const name = request.body.name
  const attending = request.body.attending
  const partySize = request.body.partySize
  const food1 = request.body.food1
  const food2 = request.body.food2
  const food3 = request.body.food3
  const food4 = request.body.food4
  const dietRestricted = request.body.dietaryChoiceGroup
  const restriction = request.body.dietRestrictionType
  const dateIdea = request.body.dateNightIdea

  firebase.database().ref().child('rsvps/' + name).set({
    name: name,
    attending: attending,
    size : partySize,
    pot_roast: food1,
    ravioli: food2,
    chicken: food3,
    kids: food4,
    diet: dietRestricted,
    restriction: restriction,
    dateIdea: dateIdea
  }).then(function() {
    response.render('finished');
  }).catch(function(err) {
    console.log('error', err);
    response.render('error');
  });
}

module.exports = {
  handleSubmission,
}
