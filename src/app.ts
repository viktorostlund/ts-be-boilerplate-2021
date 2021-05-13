import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const pgp = require('pg-promise')(/* options */)

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});

const { DB_USERNAME, DB_PASSWORD, DB,  DB_URL, DB_PORT } = process.env

const db = pgp(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB}`)

interface Person {
  first_name: String,
  last_name: String,
  gender: String,
  date_of_birth: String,
  country_of_birth: String
}

const createPerson = async ({first_name, last_name, gender, date_of_birth, country_of_birth}: Person) => {
  // Create Person in DB
  try {
    return await db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}

const getPerson = async (name: String) => {
  // Get Person from DB
  try {
    return await db.one(`SELECT * FROM person WHERE first_name = '${name}' LIMIT 1;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}
 
/// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
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
const root = {
  createPerson: (props: Person) => {
    return createPerson(props);
  },
  getPerson: ({name}: {name: String}) => {
    return getPerson(name);
  },
};
 
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
