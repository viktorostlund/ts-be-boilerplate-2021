# Typescript backend boilerplate 2021

Basic NodeJS/Typescript API for getting or creating data about people to and from a database.

## Endpoints

### Queries:
- getPerson(name: string): Person

### Mutations:
- createPerson(args: Person): Person
## Run the app

Run app: `npm run dev`

Compile TS and then run app: `npm start`
## Technologies
- GraphQL
- Postgres
- Express

## Future improvements
1. Improve postgres connection (by using pg instead of pgp?)
1. Make API more useful
1. Add code gen
1. Check out if KNEX could be useful
1. Make logger log to file as well as console
