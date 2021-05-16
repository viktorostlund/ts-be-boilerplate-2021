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
  
  export const getPersons = async (args: any) => {
    let where = ''
    if (Object.keys(args).length) {
      const keys = Object.keys(args)
      for (let i = 0; i < keys.length; i++) {
        where += ` ${i < 1 ? 'WHERE' : 'AND'} ${keys[i]} = '${args[keys[i]]}' `
      }
    }
    try {
      const result = await db.any(`SELECT * FROM person${where};`)
      return result;
    } catch (error) {
      console.error(error)
      return error.message
    }
  }
