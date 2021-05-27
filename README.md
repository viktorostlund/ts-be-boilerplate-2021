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
- Node
- GraphQL
- Postgres
- Express

## Future improvements
1. Add more endpoints such as delete and update
1. Refactor queries
1. Make logger log to file as well as console
1. Add code gen
1. Add data loader
