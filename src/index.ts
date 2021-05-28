import logger from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import { Client } from 'pg'
import { ApolloServer } from 'apollo-server-express';

import { loggerParser } from './utils';
import resolvers from './resolvers';
import schema from './schema';

export const db = new Client({
  host: 'localhost',
  port: 6789,
  user: 'user',
  password: 'pass',
  database: 'backend_boilerplate_db'
})

dotenv.config({
  path: '.env'
});

db.connect(err => {
  if (err) {
    console.error('Connection with database failed: ', err.stack)
  } else {
    console.log('Connected to database')
  }
})

const server = new ApolloServer({ typeDefs: schema, resolvers});

const app = express();
logger.token('graphql-query', loggerParser);
app.use(logger(':url :status :response-time :graphql-query'));
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
