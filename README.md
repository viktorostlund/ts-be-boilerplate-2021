# Typescript backend boilerplate 2021

Basic NodeJS/Typescript API for getting or creating data about people to and from a database.

## Endpoints

### Queries
- persons(args: Person): [ Person ]

### Mutations
- person(args: Person): Person

## Run the app locally

1. Set up database: `docker-compose up -d`
1. Run migrations: `npx knex migrate:latest`
1. Run project: `npm run start:dev` or `npm start` (to compile TS first)

## Main tools and technologies
- NodeJS
- ExpressJS
- GraphQL
- PostgreSQL
- KNEX

## Future improvements
1. Insert rows in migrations
1. Use data loader to load relation data more efficient
1. Add more endpoints such as delete and update
1. Refactor queries with KNEX
1. Make logger log to file as well as console
1. Add code gen
1. Send database to Apollo server through context
