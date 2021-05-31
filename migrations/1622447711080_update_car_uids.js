exports.up = async function (knex) {
	await knex.raw(`
		UPDATE person SET car_uid = (
			SELECT CASE WHEN person.car_uid IS NOT DISTINCT FROM person.car_uid
			THEN car_uid END FROM car ORDER BY random() LIMIT 1
		);
	`);
};

exports.down = exports.down = async function (knex) {
	await knex.raw(`
	`);
  };
  
