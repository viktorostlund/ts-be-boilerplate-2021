exports.up = async function (knex) {
  await knex.raw(`
	CREATE TABLE person (
		person_uid UUID NOT NULL PRIMARY KEY,
		first_name VARCHAR(50) NOT NULL,
		last_name VARCHAR(50) NOT NULL,
		gender VARCHAR(50) NOT NULL,
		email VARCHAR(100),
		country_of_birth VARCHAR(50) NOT NULL,
		date_of_birth DATE NOT NULL
	);
  `);
};

exports.down = async function (knex) {
  await knex.raw(`
  	DROP TABLE person;
  `);
};
