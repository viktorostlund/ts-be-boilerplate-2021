import dotenv from 'dotenv';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import pgp from 'pg-promise'
import { Person } from './types/types';

dotenv.config({
  path: '.env'
});

const pgPromise = pgp()
const { DB_USERNAME, DB_PASSWORD, DB,  DB_URL, DB_PORT } = process.env
const db = pgPromise(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}:${DB_PORT}/${DB}`)

const createPerson = async ({first_name, last_name, gender, date_of_birth, country_of_birth}: Person) => {
  try {
    return await db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}

const getPerson = async (name: string) => {
  try {
    return await db.one(`SELECT * FROM person WHERE first_name = '${name}' LIMIT 1;`)
  } catch (error) {
    console.error(error)
    return error.message
  }
}

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

const root = {
  createPerson: (props: Person) => {
    return createPerson(props);
  },
  getPerson: ({name}: {name: string}) => {
    return getPerson(name);
  },
};
 
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
const port = process.env.PORT || 4000
app.listen(port);
console.log('Running a GraphQL API server at localhost:4000/graphql');
