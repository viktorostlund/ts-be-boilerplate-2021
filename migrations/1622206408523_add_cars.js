exports.up = async function (knex) {
  await knex.raw(`
	CREATE TABLE car (
		car_uid UUID NOT NULL PRIMARY KEY,
		make VARCHAR(100) NOT NULL,
		model VARCHAR(100) NOT NULL,
		price NUMERIC(19, 2) NOT NULL CHECK (price > 0)
	);

	ALTER TABLE person
	ADD COLUMN car_uid UUID REFERENCES car(car_uid);
  `);
};

exports.down = async function (knex) {
  await knex.raw(`
  	DROP TABLE car;
  `);
};
