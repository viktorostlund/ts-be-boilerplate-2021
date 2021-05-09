var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://viktorostlund:password@localhost:5432/test_db')

const getData = (name) => {
  // Get data from local PostgresQL database
  return db.one(`SELECT country_of_birth FROM person WHERE first_name = '${name}';`)
    .then(function (data) {
      return data.country_of_birth;
    })
    .catch(function (error) {
      return error.message
    })
} 
 
/// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type Query {
  getCountry(name: String): String
}
`);

// The root provides a resolver function for each API endpoint
var root = {
getCountry: ({name}) => {
  return getData(name);
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
