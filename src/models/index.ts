import { db } from '../'
import { Person, Car } from '../types/types';

export const createPerson = ({first_name, last_name, gender, date_of_birth, country_of_birth}: Person) => {
  try {
    return db.query(
      'INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), $1, $2, $3, $4, $5) RETURNING *;',
      [first_name, last_name, gender, date_of_birth, country_of_birth]
    )
  } catch (error) {
    console.error(error)
    return error.message
  }
}

export const createCar = ({make, model, price}: Car) => {
  try {
    return db.query(
      'INSERT INTO car (car_uid, make, model, price) VALUES (uuid_generate_v4(), $1, $2, $3) RETURNING *;', 
      [make, model, price]
    )
  } catch (error) {
    console.error(error)
    return error.message
  }
}
  
export const getPeople = async () => {
  try {
    const result = await db.query(`SELECT * FROM person;`)
    return result.rows;
  } catch (error) {
    return error.message
  }
}

export const getCar = async ({car_uid}: {car_uid: string}) => {
  try {
    const result = await db.query('SELECT * FROM car WHERE car_uid = $1;', [car_uid])
    return result.rows[0];
  } catch (error) {
    return error.message
  }
}
