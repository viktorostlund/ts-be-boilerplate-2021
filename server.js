var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://viktorostlund:password@localhost:5432/test_db')

const createPerson = ({first_name, last_name, gender, date_of_birth, country_of_birth}) => {
  // Create Person in DB
  return db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error(error)
      return error.message
    })
}

const getPerson = (name) => {
  // Get Person from DB
  return db.one(`SELECT * FROM person WHERE first_name = '${name}' LIMIT 1;`)
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      console.error(error)
      return error.message
    })
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
