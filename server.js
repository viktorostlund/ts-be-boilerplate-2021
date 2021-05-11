var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://viktorostlund:password@localhost:5432/test_db')

const createPerson = (name) => {
  // Create Person in local PostgresQL database
  return db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${name}', 'Karlsson', 'Female', '1936-01-23', 'Sweden') RETURNING *;`)
    .then(function (data) {
      return data;
    })
    .catch(function (error) {
      return error.message
    })
}

const getCountry = (name) => {
  // Get data from local PostgresQL database
  return db.one(`SELECT country_of_birth FROM person WHERE first_name = '${name}';`)
    .then(function (data) {
      return data.country_of_birth;
    })
    .catch(function (error) {
      return error.message
    })
}

const getAge = (name) => {
  // Get data from local PostgresQL database
  return db.one(`SELECT date_of_birth FROM person WHERE first_name = '${name}';`)
    .then(function (data) {
      return new Date(Date.now() - data.date_of_birth).getFullYear();
    })
    .catch(function (error) {
      return error.message
    })
}
 
/// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Mutation {
    createPerson(name: String): Person
  }
  type Query {
    country(name: String): String
    age(name: String): String
  }
  type Person {
    id: Int
    first_name: String
    last_name: String
    email: String
    date_of_birth: String
    country_of_birth: String
    car_uid: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
createPerson: ({name}) => {
  return createPerson(name);
},
country: ({name}) => {
  return getCountry(name);
},
age: ({name}) => {
  return getAge(name);
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
