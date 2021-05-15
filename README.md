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
* Improve postgres connection (by using pg instead of pgp?)
* Make API more useful
* Add code gen
* Add logger
* Check out if KNEX could be useful
