const dotenv = require('dotenv');
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var pgp = require('pg-promise')(/* options */)

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

const { DB_USERNAME, DB_PASSWORD, DB,  DB_URL, DB_PORT } = process.env
console.log(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB}`)

var db = pgp(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB}`)

const createPerson = async ({first_name, last_name, gender, date_of_birth, country_of_birth}) => {
  // Create Person in DB
  try {
    return await db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}

const getPerson = async (name) => {
  // Get Person from DB
  try {
    return await db.one(`SELECT * FROM person WHERE first_name = '${name}' LIMIT 1;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}
 
/// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Mutation {
    createPerson(
      first_name: String!,
      last_name: String!,
      gender: String!,
      date_of_birth: String!,
      country_of_birth: String!
      ): Person
  }
  type Query {
    getPerson(name: String): Person
  }
  type Person {
    id: Int
    first_name: String
    last_name: String
    gender: String
    email: String
    date_of_birth: String
    country_of_birth: String
    car_uid: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  createPerson: (props) => {
    return createPerson(props);
  },
  getPerson: ({name}) => {
    return getPerson(name);
  },
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
