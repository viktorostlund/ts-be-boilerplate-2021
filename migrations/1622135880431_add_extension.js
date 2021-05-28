exports.up = async function (knex) {
  await knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
  `);
};

exports.down = async function (knex) {
  await knex.raw(`
    DELETE EXTENSION IF EXISTS "uuid-ossp"
	`);
  };