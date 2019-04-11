const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
})

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

  pool.query('INSERT INTO rsvp' +
  '(name, attending, size, food1, food2, food3, food4, dietRestricted, restriction, dateIdea, submissionTime)' +
  'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
  [name, attending, partySize, food1, food2, food3, food4, dietRestricted, restriction, dateIdea, Date("2015-03-25T12:00:00-06:30")],
  (error, results) => {
    if (error) {
      throw error
      response.render('error');
    }
    response.render('finished');
  })
}

module.exports = {
  handleSubmission,
}
