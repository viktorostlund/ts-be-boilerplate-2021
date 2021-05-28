exports.up = async function (knex) {
  await knex.raw(`
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Elliot', 'O''Shiels', 'eoshiels0@guardian.co.uk', 'Male', '1961-07-14', 'Pakistan');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Ailey', 'Thouless', 'athouless1@about.me', 'Female', '1939-01-03', 'China');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Mack', 'Churly', 'mchurly2@mtv.com', 'Female', '1949-12-06', 'Peru');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Letizia', 'Messum', null, 'Male', '2006-05-18', 'China');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Gabriellia', 'Milch', 'gmilch4@noaa.gov', 'Female', '1984-05-24', 'Canada');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Wiley', 'Yakushkev', null, 'Male', '1983-03-18', 'China');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Mikol', 'Ucceli', 'mucceli6@histats.com', 'Male', '1930-12-11', 'Colombia');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Harley', 'Saddington', 'hsaddington7@dell.com', 'Male', '1935-03-01', 'Indonesia');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Joella', 'Creegan', 'jcreegan8@buzzfeed.com', 'Female', '1953-01-11', 'Uganda');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Paula', 'Baughn', null, 'Male', '1986-12-13', 'Iran');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Dulcine', 'Rustich', 'drusticha@wikimedia.org', 'Female', '1961-05-12', 'Poland');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Missie', 'Joseland', 'mjoselandb@wordpress.com', 'Female', '1932-12-09', 'South Korea');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Don', 'Egdell', 'degdellc@mediafire.com', 'Male', '1994-02-06', 'Dominican Republic');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Lorenzo', 'Milan', 'lmiland@wisc.edu', 'Male', '1983-10-20', 'Mexico');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Stormi', 'Di Domenico', 'sdidomenicoe@fema.gov', 'Female', '1937-05-01', 'Sweden');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Annice', 'Brokenshaw', 'abrokenshawf@businessinsider.com', 'Male', '1979-01-21', 'North Korea');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Arliene', 'Papachristophorou', 'apapachristophoroug@mtv.com', 'Female', '1989-07-21', 'South Korea');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Theadora', 'Nend', 'tnendh@fastcompany.com', 'Female', '1956-09-09', 'China');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Trixi', 'Hairyes', 'thairyesi@stumbleupon.com', 'Female', '2013-11-17', 'Brazil');
	insert into person (person_uid, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Magdalena', 'Fear', 'mfearj@opensource.org', 'Female', '2008-04-25', 'Greece');

	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Toyota', 'Venza', 12859);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Chevrolet', 'Suburban', 39989);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Mitsubishi', 'Pajero', 63056);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Lincoln', 'Continental Mark VII', 3865);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Maserati', 'Biturbo', 4323);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Audi', 'S8', 67036);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Ford', 'Crown Victoria', 29072);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Honda', 'Pilot', 3735);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Pontiac', 'Fiero', 54543);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Mazda', 'Tribute', 23216);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Land Rover', 'Range Rover', 65464);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Isuzu', 'Trooper', 93331);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Toyota', 'Sequoia', 61013);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'BMW', '745', 80300);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Ford', 'Crown Victoria', 5644);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Kia', 'Forte', 22957);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'BMW', 'M6', 1762);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Nissan', 'Sentra', 39384);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Nissan', '240SX', 7667);
	insert into car (car_uid, make, model, price) values (uuid_generate_v4(), 'Dodge', 'Ram 1500', 20076);
	`);
};

exports.down = exports.down = async function (knex) {
	await knex.raw(`
	`);
  };
  
