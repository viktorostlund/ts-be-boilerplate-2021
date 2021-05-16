import { db } from '../'
import { Person } from '../types/types';

export const createPerson = ({first_name, last_name, gender, date_of_birth, country_of_birth}: Person) => {
    try {
      return db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
    } catch (error) {
      console.error(error)
      return error.message
    }
  }
  
  export const getPersons = async () => {
    try {
      const result = await db.any(`SELECT * FROM person;`)
      console.log(result)
      return result;
    } catch (error) {
      console.error(error)
      return error.message
    }
  }