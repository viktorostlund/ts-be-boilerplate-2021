import { createPerson, createCar, getPeople, getCar } from '../models';
import { Person } from '../types/types';

export default {
    Mutation: {
        person: createPerson,
        car: createPerson
    },
    Query: {
        people: getPeople,
    },
    Person: {
        car: getCar
    }
}
