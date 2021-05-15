import logger from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import pgp from 'pg-promise'
import { ApolloServer } from 'apollo-server-express';

import { loggerParser } from './utils';
import resolvers from './resolvers';
import schema from './schema';

const pgPromise = pgp()
dotenv.config({
  path: '.env'
});

export const db = pgPromise(process.env.DB_URL!)

const server = new ApolloServer({ typeDefs: schema, resolvers});

const app = express();
logger.token('graphql-query', loggerParser);
app.use(logger(':url :status :response-time :graphql-query'));
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
