exports.handleSubmission = function(req, res) {
  var string = "NAME IS: " + req.body.name + "<br>";
  string += "Attending??: " + req.body.attending + "<br>";
  string += "SIZE: " + req.body.partySize + "<br>";
  string += "FOOD CHOICE: " + req.body.foodChoiceGroup + "<br>";
  string += "Diet Restriction: " + req.body.dietaryChoiceGroup + "<br>";
  string += "Restrcited: " + req.body.dietRestrictionType + "<br>";
  string += "Date Night Idea: " + req.body.dateNightIdea + "<br>";

  res.render('finished');
}
