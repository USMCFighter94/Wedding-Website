CREATE TABLE IF NOT EXISTS rsvp(
  id SERIAL PRIMARY KEY,
  name text NOT NULL,
  attending text NOT NULL,
  size integer,
  food1 text,
  food2 text,
  food3 text,
  food4 text,
  dietRestricted text,
  restriction text,
  dateIdea text,
  submissionTime text
);
