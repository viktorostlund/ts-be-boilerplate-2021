import { db } from '../'
import { Person } from '../types/types';

export const createPerson = async ({first_name, last_name, gender, date_of_birth, country_of_birth}: Person) => {
    try {
      return await db.one(`INSERT INTO person (person_uid, first_name, last_name, gender, date_of_birth, country_of_birth) VALUES (uuid_generate_v4(), '${first_name}', '${last_name}', '${gender}', '${date_of_birth}', '${country_of_birth}') RETURNING *;`)
    } catch (error) {
      console.error(error)
      return error.message
    }
  }
  
  export const getPerson = async (name: string) => {
    try {
      return await db.one(`SELECT * FROM person WHERE first_name = '${name}' LIMIT 1;`)
    } catch (error) {
      console.error(error)
      return error.message
    }
  }