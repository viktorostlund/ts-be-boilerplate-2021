# Typescript backend boilerplate 2021

Basic NodeJS/Typescript API for getting or creating data about people to and from a database.

## Endpoints

### Queries
- persons(args: Person): [ Person ]

### Mutations
- person(args: Person): Person
## Run the app

Run app: `npm run dev`

Compile TS and then run app: `npm start`
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
1. Check out if KNEX could be useful
1. Add data loader
